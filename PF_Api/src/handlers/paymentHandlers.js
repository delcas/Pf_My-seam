const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");


module.exports = {
  getPaymentHandler: async (req, res) => {
    mercadopago.configure({
      access_token: "TEST-3620819046591770-040519-29954d5e725ad2c0821d85a2db976104-154479596",
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(express.static("../../client/html-js"));
    app.use(cors());
    app.get("/", function (req, res) {
      res.status(200).sendFile("index.html");
    });
  },

  postPaymentHandler: async (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
          amount: Number(req.body.amount),
        }
      ],
      back_urls: {
        "success": "http://localhost:3001/checkout/feedback",
        "failure": "http://localhost:3001/checkout/feedback",
        "pending": "http://localhost:3001/checkout/feedback"
      },
      auto_return: "approved",
    };
    mercadopago.preferences.create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id          
        });
      }).catch(function (error) {
        console.log(error);
      });
  },

  getFeedbackHandler: async (req, res) => {
    res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id
    });
  }
}

// app.listen(3001, () => {
// 	console.log("The server is now running on Port 3001");
// });
  


