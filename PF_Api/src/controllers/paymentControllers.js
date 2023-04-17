const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REDIRECT_URI} = process.env;
const { User } = require("../db.js");
const axios = require('axios');

module.exports = {
  createPreference: async (items, seller_id) => {
    // Crea un objeto de preferencia
    let preference = {
      back_urls: {
        success: "http://localhost:3000/home",
        failure: "http://localhost:3000/checkout/failure",
        pending: "http://localhost:3000/checkout/pending",
      },
      auto_return: "approved",
      items: [],
    };
    items.forEach((item) => {
      preference.items.push(item);
    });
    const seller = await User.findByPk(seller_id);
    // Enviar solicitud de preferencia
    axios({
      method: "POST",
      url: "https://api.mercadopago.com/checkout/preferences",
      headers: {
        Authorization: `Bearer ${seller.MPAccessToken}`,
        "Content-Type": "application/json", 
      },
      data: preference,
    })
      .then(function (response) {
        res.json({
          global: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  sendInformationMP: async (code, status) => {
    axios
      .post(
        "https://api.mercadopago.com/oauth/token",
        {
          client_secret: CLIENT_SECRET,
          client_id: CLIENT_ID,
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI,
          live_mode: false
        },
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        await User.update({ 
          MPAccessToken : response.access_token,
          MPUserId : response.user_id,
          MPRefreshToken : response.refresh_toke,
          MPExpiresIn : response.expires_in
        },{
          where: {
            id: status
          }
        })
      })
      .catch((error) => {
        console.error(error);
      })
  },
};