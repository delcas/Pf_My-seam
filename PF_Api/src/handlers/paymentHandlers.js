const mercadopago = require ('mercadopago');
const express = require('express');
process.env.ACCESS_TOKEN_MP = 'ACCESS_TOKEN_MP'

module.exports = {
  postPaymentHandler: async (req, res) => {
    mercadopago.configure({
      access_token: 'ACCESS_TOKEN_MP'
    });
    
    // const order = db.orders.create({ userId: req.userId, productId: req.body.productId });
    /* aquí crea tu orden en la DB para el usuario logeado */
     let order = { 
      items: [
        {
          id: 1234,
          title: "Mi producto",
          price: 100,
          quantity: 1,
        }, 
      ],
    };

    // Ahora le decimos a MP que cree la "preferencia". Asume que "order" tiene datos del producto
    mercadopago.preferences
    .create(order)
    .then((response) => {
      // el front recibirá el preferenceId :)
      res.json({ preferenceId: response.body.id });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

/* app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${3002}`)
})
 */


