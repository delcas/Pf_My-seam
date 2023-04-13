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
  // const add_prods = await
  /*const array =*/ prods?.forEach(async (p) => {
    const prod = await Product.findByPk(p.productid);
    console.log("Add prod controller stock1: ", prod.stock);
    if (prod && p.quantity > prod.stock) {
// ¿Como verificar e informar sin que rompa con error?
      return [ prod.id, false ];
    } else {
      await active.addProduct(p.productid, {
        through: {
          quantity: p.quantity,
        },
      });
      return [ prod.id, true ];
    }
  });
  // if(!array.every((a) => a.includes(true))) throw new Error( `La cantidad solicitada supera el stock disponible`)
  return await Cart.findAll({
    where: {
      id: active.id,
    },
    include: {
      model: Product,
    },
  });
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
  const { cartid, state, productid, quantity, conclusion } = edit_data;
  const edit_cart = await Cart.findByPk(cartid);
  if (state) {
    await edit_cart?.update({ state });
  }
  if (productid) {
    await AddProductToCart(edit_cart, { productid, quantity });
  }
  //   if (conclusion) {

  //   }
  return edit_cart;
};
const deleteCartProduct = async () => {};
const deleteCartAllProducts = async () => {};
module.exports = {
  getActiveCart,
  AddProductToCart,
  getCustomersCartProducts,
  postCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
  putCartProduct,
  getCartByPk
};
