const mercadopago = require("mercadopago");
const { sendInformationMP } = require("../controllers/paymentControllers");

const postPaymentHandler = (req,res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  })

  const { items } = req.body;
  console.log(items);
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
      res.json({
        global: response.body.id,
      })
    })
    .catch(function (error) {
      console.log(error);
    });

}

const getAuthCode = (req,res) => {
  const { code, status } = req.query;
  try {
    sendInformationMP(code)
    res.status(200).json(code);
  } catch (error) {
    res.status(400)
  }
}

module.exports = {postPaymentHandler, getAuthCode};
