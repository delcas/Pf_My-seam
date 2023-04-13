const {
  getActiveCart,
  AddProductToCart,
  getCustomersCartProducts,
  postCartProduct,
  putCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
} = require("../controllers/cartController");

let cartItem = [];
module.exports = {
  createCartProduct: async (req, res) => {
    const { customer_id, prods } = req.body; // --> Donde prods = [ {productid, quantity} ]
    console.log("CartPost handler: ", customer_id, prods);
    //customer_id, [{productid: N, quantity: N}, {productid: N, quantity: N}]
    try {
      const active = await getActiveCart(customer_id);
      let ver;
      active ? (ver = active.toJSON()) : (ver = { id: null });
      if (!ver.id) {
        const new_cart = await postCartProduct({ customer_id, prods });
        console.log("Handler create new_cart");
        res.status(201).json(new_cart);
      } else {
        const in_cart = await AddProductToCart({ active, prods });
        console.log("Handler add products in_cart");
        res.status(201).json(in_cart);
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).send(error.message);
    }
  },
  getCartProducts: async (req, res) => {
    const { customer_id } = req.body;
    try {
      const customer_carts = await getCustomersCartProducts(customer_id);
      res.status(200).json(customer_carts);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  modifyCartProduct: async (req, res) => {
    const edit_data = req.body;
    try {
      const modify = await putCartProduct( edit_data );
      res.status(200).json(modify);
    } catch (error) {
      res.status(400).send(error.massage);
    }
  },
  //  deleteCartProduct: async (req, res) => {},
  //  deleteCartAllProducts: async (req, res) => {};
};
