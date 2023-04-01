const mercadopago = require("mercadopago");

const postPaymentHandler = (req,res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  })

  const { name, price, quantity } = req.body;
  
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: name,
        unit_price: price,
        quantity: quantity,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });


}

module.exports = postPaymentHandler;
