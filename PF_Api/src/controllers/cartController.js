const { Cart, Product, Cart_Product} = require("../db.js");


    const postCartProduct = async({ customer_id, prods })=>{
        //customer_id, [{productid: N, quantity: N}, {productid: N, quantity: N}]
        console.log('Llega al controller');
        const new_cart = await Cart.create({
            state: "En Compra",
            customer_id,
        });        
        return await AddProductToCart(new_cart, prods);
    };
    const getCartProducts = async()=>{

    };
    const getActiveCart = async(customer_id)=>{
        const new_cart = await Cart.findOne({
            where: {
                customer_id,
                state: "En Compra",
            }            
        })
        if (new_cart) console.log('Controller getCart: ', new_cart.toJSON());
        return new_cart;
    };   

    const AddProductToCart = async({ active, prods })=>{
        const add_prods = prods?.map( async (p) => {
            //buscar en tabla intermedia...
            const prod = await Product.findByPk(p.productid);
            if(p.quantity > prod.stock) throw new Error(`La cantidad solicitada de ${prod.name} supera el stock disponible, solo quedan ${prod.stock} unidades`);
            return await active.addProduct(p.productid, {
            through: {
              quantity: p.quantity
            }
          })
        });
        return add_prods;
    };
    
    const deleteCartProduct = async()=>{
        
    };
    const deleteCartAllProducts = async()=>{
        
    };
module.exports={
    getActiveCart,
    AddProductToCart,
    getCartProducts,
    postCartProduct,
    deleteCartProduct,
    deleteCartAllProducts,
}