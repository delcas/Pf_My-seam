const { Router } = require("express");
const { postPaymentHandler} = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/", postPaymentHandler);

module.exports = paymentRouter;
