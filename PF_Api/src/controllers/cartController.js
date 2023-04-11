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
        const new_cart = await Cart.findOne({
            where: {
                customer_id,
                state: "En Compra",
            }            
        })
        console.log('Controller getCart: ', new_cart.toJSON());
        return new_cart;
    },    

    AddProductToCart: async({ active, productid, quantity })=>{
        return await active.addProduct(productid, {
            through: {
              quantity: quantity
            }
          }) 
    },
    
    deleteCartProduct: async()=>{
        
    },
    deleteCartAllProducts:async()=>{
        
    }

}