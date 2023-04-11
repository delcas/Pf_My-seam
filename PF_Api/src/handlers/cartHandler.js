const {
  getActiveCart,
  AddProductToCart,
  getCartProducts,
  postCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
} = require("../controllers/cartController");

let cartItem = [];
module.exports = {
// (const getCartProducts = async (req, res) => {
//   try {
//     cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
//     res.send("cart", { cartItem });
//   } catch (error) {
//     res.status(500).send("Error al mostrar el cart", error);
//   }
// };)

createCartProduct: async (req, res) => {
    const { customer_id, productid, quantity } = req.body;
    console.log('CartPost handler: ', customer_id, productid, quantity );
  try {
    const active = await getActiveCart(customer_id);
    const ver = active.toJSON();
    console.log(ver.id);
    if(!ver.id) {
      const new_cart = await postCartProduct({ customer_id, productid, quantity })
      res.status(201).json(new_cart);
    } else {
      const in_cart = await AddProductToCart({ active, productid, quantity });
      res.status(201).json(in_cart);
    }
  
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
},

// const deleteCartProduct = async (req, res) => {};

// const deleteCartAllProducts = async (req, res) => {};

};
