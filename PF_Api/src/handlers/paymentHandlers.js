const mercadopago = require("mercadopago");

const postPaymentHandler = (req,res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  })

  const { items } = req.body;

  // Crea un objeto de preferencia
  let preference = { 
    "back_urls": {
      "success": "http://localhost:3000/home",
      "failure": "http://localhost:3000/checkout/failure",
      "pending": "http://localhost:3000/checkout/pending"
  },
  "auto_return": "approved",
  items: [] 
  };
  
  items.forEach(item => {
    preference.items.push(item)
  });

  mercadopago.preferences.create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      console.log(response)
      res.json({
        global: response.body.id,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}



module.exports = postPaymentHandler;
