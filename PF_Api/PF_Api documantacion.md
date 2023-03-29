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
    GET (/questprod/product/) -by Customer-
------------------{ customerId } = req.body
    GET (/questprod/product/) -by Product-
------------------{ offerId } = req.body
    GET (/questprod/product/) -by Seller-(no actualizado)
------------------{ sellerId } = req.body
    GET (/questprod/product/?questId=...) -By id-
    PUT (/questprod/product/:id)
------------------{ answer } = req.body
    DELETE (/questprod/product/:id)
```

### Service Questions: "/questserv"
```
    POST (/questserv/service/:offerId) -id of the Service by param-
------------------{ question, customerId } = req.body
    GET (/questserv/service/) -by Customer-
------------------{ customerId } = req.body
    GET (/questserv/service/) -by Product-
------------------{ offerId } = req.body
    GET (/questserv/service/) -by Seller-(no actualizado)
------------------{ sellerId } = req.body
    GET (/questserv/service/?questId=...) -By id-
    PUT (/questserv/service/:id)
------------------{ answer } = req.body
    DELETE (/questserv/service/:id)
```


## Cart: "/cart"