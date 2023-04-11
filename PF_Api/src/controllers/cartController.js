const { Cart, Product} = require("../db.js");

module.exports={
    postCartProduct: async({ customer_id, productid, quantity })=>{
        console.log('Llega al controller');
        const new_cart = await Cart.create({
            state: "En Compra",
            customer_id,
        });
        const add_prod = await new_cart.addProduct(productid, {
            through: {
              quantity: quantity
            }
          });
        return add_prod;
    },
    getCartProducts:
    async()=>{

    }, 
    getActiveCart: async(customer_id)=>{
        const new_cart = await Cart.findAll({
            where: {
                customer_id,
                state: "En Compra",
            }            
        })
        console.log('Controller postCart: ', new_cart);
        return new_cart;
    },    

    // AddProductToCart: async({ customer_id, productid, quantity })=>{
    //     const add_prod = await Cart_Product.upsert({ customer_id, productid, quantity }) 
    // },
    
    deleteCartProduct: async()=>{
        
    },
    deleteCartAllProducts:async()=>{
        
    }

}