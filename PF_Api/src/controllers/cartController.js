const { Cart, Product, Cart_Product } = require("../db.js");

const postCartProduct = async ({ customer_id, prods }) => {
  //customer_id, [{productid: N, quantity: N}, {productid: N, quantity: N}]
  console.log("Llega al controller - Post Cart");
  const new_cart = await Cart.create({
    state: "En Compra",
    customer_id,
  });
  return await AddProductToCart({ active: new_cart, prods });
};
const getActiveCart = async (customer_id) => {
  const new_cart = await Cart.findOne({
    where: {
      customer_id,
      state: "En Compra",
    },
  });
  if (new_cart) console.log("Controller getCart: ", new_cart.toJSON());
  return new_cart;
};
const AddProductToCart = async ({ active, prods }) => {
  // const add_prods = await  Array.fromAsync(
  /*const array =*/ 
  return await Promise.all(prods?.map(async (p) => {
    const prod = await Product.findByPk(p.productid);
    console.log("Add prod controller stock1: ", prod.stock);
    if (prod && p.quantity > prod.stock) {
      // ¿Como verificar e informar sin que rompa con error?
      return [prod.id, false];
    } else if (p.quantity === 0) {
      await deleteCartProduct(active, prod);
      return [prod.id, true];
    } else {
      await active.addProduct(p.productid, {
        through: {
          quantity: p.quantity,
        },
      });
      return [prod.id, true];
    }
  }));
  // if(!array.every((a) => a.includes(true))) throw new Error( `La cantidad solicitada supera el stock disponible`)
  // return await Cart.findAll({
  //   where: {
  //     id: active.id,
  //   },
  //   include: {
  //     model: Product,
  //   },
  // });
};
const getCustomersCartProducts = async (customer_id) => {
  const carts = await Cart.findAll({
    where: {
      customer_id,
    },
    include: {
      model: Product,
    },
  });
  return carts;
};
const getCartByPk = async (cartid) => {
  const carts = await Cart.findOne({
    where: {
      id: cartid,
    },
    include: {
      model: Product,
    },
  });
  return carts;
};
const putCartProduct = async (edit_data) => {
  const { cartid, state, prods, conclusion } = edit_data;
  const edit_cart = await getCartByPk(cartid);
  if (state) {
    await edit_cart?.update({ state });
  }
  if (edit_cart && prods.length > 0) {
    //prods: [{ productid, quantity }]
    /*
1° busco los productos que ya están en el carrito
2° a) me fijo que prods.productid coincide con edit_cart.product.id
  b) mando el producto que se va a modificar a cart_product update
3° a) el producto que no coincide, hay que ver si fue eliminado
  b) si no, hay que agregar. De lo contrario hay que recuperar
 */
    // let modify;
    const existents = edit_cart.products.length > 0 ? edit_cart.products : null;
    let add_prods;
    if (existents) {
      for (let i = 0; i < prods.length; i++) {
        const j = existents.findIndex((p) => p.id === prods[i].productid);
        if (j > -1) {
          prods[i].quantity > existents[j].stock
            ? alert(
                `Pedido de ${existents[j].name} exede stock, solo hay ${existents[j].stock} unidades`
              )
            : await existents[j].update(prods[i].quantity);
          prods[i].quantity === 0 &&
            (await edit_cart.deleteCartProduct(edit_cart, existents[j]));
        } else {
          add_prods.push(prods[i]);
        }
      }
      await AddProductToCart({ active: edit_cart, prods: add_prods });
    } else {
      await AddProductToCart({ active: edit_cart, prods});
    }
  }
  return await getCartByPk(cartid);
};
//   if (conclusion) {

//   }

const getCarts = async () => {
  return await Cart.findAll({
    include: {
      model: Product,
    },
  });
};
const deleteCartProduct = async (cart, product) => {
  console.log("delete: ", product);
  await cart.removeProduct(product);
};
const deleteCartAllProducts = async () => {};
module.exports = {
  getActiveCart,
  AddProductToCart,
  getCustomersCartProducts,
  postCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
  putCartProduct,
  getCartByPk,
  getCarts,
};
