const {
  getCartProducts,
  postCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
} = require("../controllers/cartController");

let cartItem = [];

// (const getCartProducts = async (req, res) => {
//   try {
//     cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
//     res.send("cart", { cartItem });
//   } catch (error) {
//     res.status(500).send("Error al mostrar el cart", error);
//   }
// };)

// const postCartProduct = async (req, res) => {
//   try {
//     const { name, description, price, image } = req.body;
//     const item = req.body;
//     cartItem.push(item);
//     localStorage.setItem("cartItem", JSON.stringify(cartItem));
//   } catch (error) {
//     res.status(500).send("Add product to cart error", error);
//   }
// };

// const deleteCartProduct = async (req, res) => {};

// const deleteCartAllProducts = async (req, res) => {};

module.exports = {
  getCartProducts,
  postCartProduct,
  deleteCartAllProducts,
  deleteCartProduct,
};
