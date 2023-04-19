require("dotenv").config();
const { auth } = require("express-oauth2-jwt-bearer");
const { AUDIENCE, BASE_URL, TOKEN_SIGNING } = process.env;
const jwtCheck = auth({
  audience: AUDIENCE,
  issuerBaseURL: BASE_URL,
  tokenSigningAlg: TOKEN_SIGNING,
});

function authError(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Maneja el error de autenticación
    console.log("No autorizado");
    res.status(401).json({ error: "No autorizado" });
  } else {
    // Maneja otros errores
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  jwtCheck,
  authError,
};
