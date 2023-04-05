const { Router } = require("express");
const { postPaymentHandler} = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/:id", postPaymentHandler);

module.exports = paymentRouter;
