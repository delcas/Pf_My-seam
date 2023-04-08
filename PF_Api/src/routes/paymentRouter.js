const { Router } = require("express");
const { 
  getPaymentHandler, 
  getFeedbackHandler, 
  postPaymentHandler} = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.get("/", getPaymentHandler);
paymentRouter.get("/feedback", getFeedbackHandler);
paymentRouter.post("/", postPaymentHandler);

module.exports = paymentRouter;
