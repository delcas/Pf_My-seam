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
const AddProductToCart = async ({ active, prods }) => {
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
        cartProduct
          ? await Cart_product.update(
              { deletedAt: null, quantity: p.quantity },
              {
                where: { cartid: active.id, productid: p.productid },
                paranoid: false,
              }
            )
          : await active.addProduct(p.productid, {
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
const putCartProduct = async (edit_data) => {
  const { cartid, state, prods, conclusion } = edit_data;
  const edit_cart = await getCartByPk(cartid);
  const edit_cartJSON = edit_cart.toJSON();
  const existents =
    edit_cartJSON.products.length > 0 ? edit_cartJSON.products : null;
  console.log("existents: ", existents);
  // console.log('putCart verif: ', edit_cartJSON);
  if (state) {
    await edit_cart?.update({ state });
    if (state === "Pagado") {
      existents?.forEach(async (p) => {
        const result = p.stock - p.cart_product.quantity;
        if (result < 0) return `Revisar disponibilidad de ${p.name}`;
        await Product.update(
          { stock: result },
          {
            where: {
              id: p.id,
            },
          }
        );
      });
    }
  }
  if (edit_cart && prods?.length > 0) {
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
const deleteCartProduct = async (cart, product) => {
  await cart.removeProduct(product.id)
  .then(console.log(`Producto ${product.id} retirado del carrito ${cart.id}`));
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

const getCarts = async () => {
  return await Cart.findAll({
    include: {
      model: Product,
    },
  });
};
const deleteCart = async (cartid) => {
  const cart = await getCartByPk(cartid);
  cart.products.forEach( async (p)=>await deleteCartProduct(cart, p));
  await Cart.destroy({
    where: {
      id: cartid,
    },
  })
  .then(console.log(`Carrito ${cartid} eliminado`));
  return `Carrito ${cartid} eliminado`;
};
const getProductsCart = async (productid) => {
  return await Cart.findAll({
    include: {
      model: Product,
      attributes: ["id", "stock"],
      where: {
        id: productid,
      },
      through: {
        attributes: ["quantity"],
      }
    },
  });
};
module.exports = {
  postCartProduct,
  AddProductToCart,
  getActiveCart,
  getCustomersCartProducts,
  putCartProduct,
  deleteCartProduct,
  getCartByPk,
  getCarts,
  deleteCart,
  getProductsCart,
};
