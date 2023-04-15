const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REDIRECT_URI} = process.env;
const { User } = require("../db.js");
const axios = require('axios');

module.exports = {
  sendInformationMP: async (code) => {
    axios.post('https://api.mercadopago.com/oauth/token', {
    client_secret: CLIENT_SECRET,
    client_id: CLIENT_ID,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: REDIRECT_URI, 
    test_token: true
}, {
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
})
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.error(error);
});
  }
}