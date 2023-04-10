const mercadopago = require("mercadopago");
const Producto = require("../models/Product")

const postPaymentHandler = (req,res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  })

  const { items } = req.body;
  console.log(items);
  // Crea un objeto de preferencia
  let preference = { items: [] };
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
