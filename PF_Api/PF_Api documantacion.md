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


{
    "id": 2,
    "state": "En Compra",
    "createdAt": "2023-04-14T13:10:11.527Z",
    "updatedAt": "2023-04-14T13:10:11.527Z",
    "deletedAt": null,
    "customer_id": 2,
    "products": [
        {
            "id": 1,
            "name": "Camiseta negra",
            "description": "Camiseta básica de algodón en color negro",
            "price": 15.99,
            "image": [
                "https://www.dtiendaslinares.es/Files/Images/References/2021/02/a9a5cda4-6fe9-4225-b622-b5c33fd7cd7d/cea52007-f45f-49e5-b00d-1b4f330bcc72.png",
                "https://www.masuniformes.com/cdnassets/camisa-negra-camarero_l.jpg",
                "https://www.masuniformes.com/cdnassets/camisa-camarero-negra_ad_l.jpg"
            ],
            "stock": 5,
            "gender": "All",
            "category": "All",
            "createdAt": "2023-04-14T13:08:34.550Z",
            "updatedAt": "2023-04-14T13:08:34.550Z",
            "deletedAt": null,
            "userid": 5,
            "cart_product": {
                "id": 1,
                "quantity": 2,
                "conclusion": "Pendiente",
                "createdAt": "2023-04-14T13:10:11.676Z",
                "updatedAt": "2023-04-14T13:10:11.676Z",
                "deletedAt": null,
                "cartid": 2,
                "productid": 1
            }
        },
        {
            "id": 4,
            "name": "Polo azul",
            "description": "Polo clásico en color azul",
            "price": 25.99,
            "image": [
                "https://www.lolitamoda.com/uploads/photo/image/57258/M091212_1.JPG",
                "https://www.lolitamoda.com/uploads/photo/image/57259/M091212_2.JPG",
                "https://www.lolitamoda.com/uploads/photo/image/57261/M091212_4.JPG"
            ],
            "stock": 2,
            "gender": "All",
            "category": "All",
            "createdAt": "2023-04-14T13:08:34.569Z",
            "updatedAt": "2023-04-14T13:08:34.569Z",
            "deletedAt": null,
            "userid": 2,
            "cart_product": {
                "id": 2,
                "quantity": 1,
                "conclusion": "Pendiente",
                "createdAt": "2023-04-14T13:10:11.691Z",
                "updatedAt": "2023-04-14T13:10:11.691Z",
                "deletedAt": null,
                "cartid": 2,
                "productid": 4
            }
        },
        {
            "id": 3,
            "name": "Polo rojo",
            "description": "Polo clásico en color rojo",
            "price": 25.99,
            "image": [
                "https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw4c5fa803/images/hi-res/HTKC2103SSBISRED19_F.jpg?sw=2025&sh=2501",
                "https://www.thekooples.com/dw/image/v2/BGQL_PRD/on/demandware.static/-/Sites-skp-master-catalog/default/dw8c3f22d2/images/hi-res/HTKC2103SSBISRED19_G.jpg?sw=2025&sh=2501"
            ],
            "stock": 7,
            "gender": "All",
            "category": "All",
            "createdAt": "2023-04-14T13:08:34.562Z",
            "updatedAt": "2023-04-14T13:08:34.562Z",
            "deletedAt": null,
            "userid": 1,
            "cart_product": {
                "id": 3,
                "quantity": 6,
                "conclusion": "Pendiente",
                "createdAt": "2023-04-14T13:10:11.696Z",
                "updatedAt": "2023-04-14T13:10:11.696Z",
                "deletedAt": null,
                "cartid": 2,
                "productid": 3
            }
        },
        {
            "id": 2,
            "name": "Camiseta blanca",
            "description": "Camiseta básica de algodón en color blanco",
            "price": 15.99,
            "image": [
                "https://shop.iturri.com/7831-large_default/camisa-laboral-blanca-manga-larga-con-tejido-fresh.jpg",
                "https://casadelasbatas.com/41563-large_default/camisa-basic-blanca-de-hombre-manga-larga-delon-roger.jpg"
            ],
            "stock": 10,
            "gender": "All",
            "category": "All",
            "createdAt": "2023-04-14T13:08:34.557Z",
            "updatedAt": "2023-04-14T13:08:34.557Z",
            "deletedAt": null,
            "userid": 4,
            "cart_product": {
                "id": 4,
                "quantity": 9,
                "conclusion": "Pendiente",
                "createdAt": "2023-04-14T13:19:15.816Z",
                "updatedAt": "2023-04-14T13:19:15.816Z",
                "deletedAt": null,
                "cartid": 2,
                "productid": 2
            }
        }
    ]
}
