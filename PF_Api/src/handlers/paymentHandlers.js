const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REDIRECT_URI, SUCCESS,FAILURE,PENDING } = process.env;
const { User } = require("../db.js");
const mercadopago = require("mercadopago");
const axios = require('axios');

const postPaymentHandler = async (req, res) => {
  const { items, seller_id } = req.body;
  const seller = await User.findByPk(seller_id);
  mercadopago.configure({
    access_token: seller.MPAccessToken,
  });
  let preference = {
    back_urls: {
      success: SUCCESS,
      failure: FAILURE,
      pending: PENDING,
    },
    auto_return: "approved",
    items: [],
  };
  items.forEach((item) => {
    preference.items.push(item);
  });
  try {
    // Enviar solicitud de preferencia
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          global: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 

const getAuthCode = async (req,res) => {
  const { code, state } = req.query;
  try {
    await axios
      .post(
        "https://api.mercadopago.com/oauth/token",
        {
          client_secret: CLIENT_SECRET,
          client_id: CLIENT_ID,
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI 
        },
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        User.update({ 
          MPAccessToken : response.data.access_token,
          MPUserId : response.data.user_id,
          MPRefreshToken : response.data.refresh_token,
          MPExpiresIn : response.data.expires_in
        },{
          where: {
            id: state
          }
        })
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        res.redirect('https://my-seam.vercel.app/');
      })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {postPaymentHandler, getAuthCode};
