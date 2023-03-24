const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const serviceRouter = require("./serviceRouter");

// Configurar los routers

router.use("/product", productRouter);
router.use("/users", userRouter);
router.use("/service",serviceRouter);

module.exports = router;
