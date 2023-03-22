const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const productRouter = require("./productRouter");

// Configurar los routers

router.use("/product", productRouter);

module.exports = router;
