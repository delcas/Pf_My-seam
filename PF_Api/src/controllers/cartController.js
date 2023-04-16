const { Cart, Product, Cart_product } = require("../db.js");

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
  // console.log('putCart verif1: ', active, ' - ', prods);
  return await Promise.all(
    prods?.map(async (p) => {
      const prod = await Product.findByPk(p.productid);
      console.log("Add prod controller stock1: ", prod.stock);
      if (prod && p.quantity > prod.stock) {
        // ¿Como verificar e informar sin que rompa con error?
        return [prod.id, false];
      } else if (p.quantity === 0) {
        await deleteCartProduct(active, prod);
        return [prod.id, true];
      } else {
        const cartProduct = await Cart_product.findOne({
          where: { cartid: active.id, productid: p.productid },
          paranoid: false,
        });
        console.log("putCart verif else: ", cartProduct);
        cartProduct ? 
        await Cart_product.update({ deletedAt: null, quantity: p.quantity, }, {
          where: { cartid: active.id, productid: p.productid },
          paranoid: false
        }) :
        await active.addProduct(p.productid, {
              through: {
                quantity: p.quantity,
              },
            });
        await active.save();
        return [prod.id, true];
      }
    })
  );
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
  const edit_cartJSON = edit_cart.toJSON();
  // console.log('putCart verif: ', edit_cartJSON);
  if (state) {
    await edit_cart?.update({ state });
  }
  if (edit_cart && prods.length > 0) {
    const existents =
      edit_cartJSON.products.length > 0 ? edit_cartJSON.products : null;
    // console.log('putCart verif: ', existents);
    let add_prods = [];
    if (existents) {
      for (let i = 0; i < prods.length; i++) {
        const j = existents.findIndex((p) => p.id === prods[i].productid);
        // console.log('putCart verif: ', prods[i], ' - ', j);
        if (j > -1) {
          const current = await Cart_product.findOne({
            where: {
              cartid: edit_cartJSON.id,
              productid: existents[j].id,
            },
          });
          prods[i].quantity > existents[j].stock
            ? alert(
                `Pedido de ${existents[j].name} exede stock, solo hay ${existents[j].stock} unidades`
              )
            : await current?.update({ quantity: prods[i].quantity });
          // prods[i].quantity === 0 &&
          //   (await deleteCartProduct(edit_cart, existents[j]));
        } else {
          add_prods.push(prods[i]);
          // console.log('putCart verif1: ', add_prods);
        }
      }
      await AddProductToCart({ active: edit_cart, prods: add_prods });
    } else {
      await AddProductToCart({ active: edit_cart, prods });
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
  await cart.removeProduct(product.id);
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
