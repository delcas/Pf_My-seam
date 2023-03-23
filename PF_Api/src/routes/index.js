const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");

// Configurar los routers

router.use("/product", productRouter);
router.use("/users", userRouter);

module.exports = router;
