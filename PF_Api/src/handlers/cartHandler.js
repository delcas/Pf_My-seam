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
  
  //se puede hacer que en cuenta de productid y quantity por separado, vengan como un array de objetos con esas dos propiedades cada uno. Para de esa forma poder recibir varios productos al crear el carrito.
  const { customer_id, prods} = req.body; // --> Donde prods = [ productid, quantity ]
    // const { customer_id, productid, quantity } = req.body;
    console.log('CartPost handler: ', customer_id, prods );
    //customer_id, [{productid: N, quantity: N}, {productid: N, quantity: N}]
  try {
    const active = await getActiveCart(customer_id);
    let ver;
    active ? ver = active.toJSON() : ver = {id:null};
    console.log(ver.id);
    if(!ver.id) {
      const new_cart = await postCartProduct({ customer_id, prods })
      res.status(201).json(new_cart);
    } else {
      const in_cart = await AddProductToCart({ active, prods });
      res.status(201).json(in_cart);
    };  
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  };
},

// const deleteCartProduct = async (req, res) => {};

// const deleteCartAllProducts = async (req, res) => {};

};
