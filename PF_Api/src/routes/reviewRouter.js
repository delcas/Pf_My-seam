const { Router } = require("express");
const { 
  getOneReviewHandler, 
  getReviewHandler, 
  postReviewHandler, 
  deleteReviewHandler,
  putReviewHandler
 } = require("../handlers/reviewHandlers")
const serviceRouter = Router();

serviceRouter.get("/", getReviewHandler);
serviceRouter.get("/:id", getOneReviewHandler);
serviceRouter.post("/", postReviewHandler);
serviceRouter.delete("/:id", deleteReviewHandler);
serviceRouter.put("/:id", putReviewHandler)

module.exports = serviceRouter;