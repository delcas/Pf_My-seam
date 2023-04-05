const mercadopago = require("mercadopago");
const Producto = require("../models/Product")

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

    const PagarProducto = async (req, res) => {
      const { id } = req.params
      const datos = req.body.items
      const producto = await Producto.findById(id)
      let preference = {
        transaction_amount: parseInt(producto[0].price * 1.15),
          net_amount: parseInt((producto[0].price) * 0.968 - 800),
          taxes: [{
            value: parseInt(producto[0].price * 1.15) - parseInt(producto[0].price),
            type: "IVA"
          }],
        binary_mode: true,
        payer: {
          name: datos.nombre,
          surname: datos.apellidos,
          email: datos.email,
          phone: {
            number: parseInt(datos.telefono),
            area_code: "57",
          },
          address: {
            zip_code: datos.postal,
            street_name: datos.barrio,
            street_number: parseInt(datos.street_number)
          },

        }
      }
    }

}

module.exports = postPaymentHandler;
