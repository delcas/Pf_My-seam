const { Cart, Product, User } = require("../db.js");
const Cart_Product = require("../models/Cart_Product.js");

module.exports={
    postCartProduct:async({ customer_id, productid, quantity })=>{
        const new_cart = await Cart.create({
            customer_id,
        });
        const add_prod = await Cart_Product.create({
            customer_id, productid, quantity }) 
        console.log('Controller postCart: ', new_cart.toJSON());
        return new_cart;
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
        console.log('Controller postCart: ', new_cart.toJSON());
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