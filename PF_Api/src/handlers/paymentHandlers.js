const mercadopago = require("mercadopago");
const { createPreference, sendInformationMP } = require("../controllers/paymentControllers");

const postPaymentHandler = (req,res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  })
  const { items, seller_id } = req.body;
  try{
    res.status(200).json(createPreference(items, seller_id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  /* mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({
        global: response.body.id,
      })
    })
    .catch(function (error) {
      console.log(error);
    }); */

} 

const getAuthCode = (req,res) => {
  const { code, status } = req.query;
  try {
    sendInformationMP(code, status)
    res.status(200).json("Success");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {postPaymentHandler, getAuthCode};
