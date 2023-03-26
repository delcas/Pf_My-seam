const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const serviceRouter = require("./serviceRouter");
const cartRouter = require("./cartRouter")
const questionsRouter = require("./questionsRouter");

// Configurar los routers

router.use("/product", productRouter);
router.use("/users", userRouter);
router.use("/service",serviceRouter);
router.use("/cart", cartRouter)
router.use("/question", questionsRouter);

module.exports = router;
