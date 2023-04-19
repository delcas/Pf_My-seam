# Rutas:
## Users: "/users"
``` 
    POST (/users/)
------------------{ name, password, birthdate, username, email, image } = req.body

    GET (/users/) -All-
    GET (/users/:id) -By id-

    PUT (/users/:id)
------------------{ name, password, birthdate, username, email, image } = req.body

    DELETE (/users/:id)
```
   

## Service: "/service"
```
    POST (/service/)
------------------{ name, description, price, userid } = req.body

    GET (/service/) -All-
    GET (/service/?name=...) -By name-
    GET (/service/:id) -By id-

    DELETE (/service/:id)
```

## Product: "/product"
```
    POST (/product/) 
------------------{ name, description, price, image, stock, userid } = req.body

    GET (/product/) -All-
    GET (/product/?name=...) -By name-
    GET (/product/:id) -By id-

    PUT (/product/:id)
------------------{ name, description, price, image, stock } = req.body

    DELETE (/product/:id)
```
## Questions:

### Product Questions: "/questprod"
```
    POST (/questprod/product/:offerId) -id of the Product by param-
------------------{ question, customerId } = req.body

    GET (/questprod/product/?customerId=...) -by Customer-
    GET (/questprod/product/?offerId=...) -by Product-
    GET (/questprod/product/?sellerId=...) -by Seller-
    GET (/questprod/product/?questId=...) -By id-

    PUT (/questprod/product/:id)
------------------{ answer } = req.body

    DELETE (/questprod/product/:id)
```

### Service Questions: "/questserv"
```
    POST (/questserv/service/:offerId) -id of the Service by param-
------------------{ question, customerId } = req.body

    GET (/questprod/service/?customerId=...) -by Customer-
    GET (/questprod/service/?offerId=...) -by Product-
    GET (/questprod/service/?sellerId=...) -by Seller-
    GET (/questserv/service/?questId=...) -By id-

    PUT (/questserv/service/:id)
------------------{ answer } = req.body

    DELETE (/questserv/service/:id)
```


## Cart: "/cart"
```
    POST (/cart)                                                        1                          2
------------------{ customer_id, prods } = req.body -> prods = [{productid, quantity}, {productid, quantity}]

    GET (/cart?customer_id=...) -by Customer- All carts that has not been deleted of that customer
    GET (/cart?cartid=...) -All info of a Cart-
    GET (/cart?is_admin=true) -BOOLEAN- Brings All avaliable Carts (only admin)
    GET (/cart?productid=...) -By productid- All carts that includes that product

    PUT (/cart)
------------------{ edit_data } = req.body-> = { cartid, state, prods } -> prods = [{productid, quantity, conclusion}, {productid, quantity, conclusion}] : Depends on what data you deliver, what update action is going to perform.

    DELETE (/cart/:id)
```

const cartProduct = allProducts.find(el => el.id == id)
    // Validar si ya existe el producto en el carrito de compras
    if (cart.find(el => el === cartProduct)) {
      cartProduct.quantity +=  1 
    } else {
        cartProduct.quantity = 1 
        cart.push(cartProduct)
      }