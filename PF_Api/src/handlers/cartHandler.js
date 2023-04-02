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

const createCartProduct = async (req, res) => {
    const { cartid, productid, quantity } = req.body;
  try {
  const new_cart = await postCartProduct({ cartid, productid, quantity })
  } catch (error) {
    res.status()
  }
};

// const deleteCartProduct = async (req, res) => {};

// const deleteCartAllProducts = async (req, res) => {};

module.exports = {
  getCartProducts,
  postCartProduct,
  deleteCartAllProducts,
  deleteCartProduct,
};
