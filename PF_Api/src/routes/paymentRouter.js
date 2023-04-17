const { Router } = require("express");
const { postPaymentHandler, getAuthCode } = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/", postPaymentHandler);
paymentRouter.get("/authcode/", getAuthCode);

module.exports = paymentRouter;
