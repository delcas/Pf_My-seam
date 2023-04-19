const { Router } = require("express");
const { 
  getOneReviewHandler, 
  getReviewHandler, 
  postReviewHandler, 
  deleteReviewHandler,
  putReviewHandler
 } = require("../handlers/reviewHandlers")
const reviewRouter = Router();

reviewRouter.get("/", getReviewHandler);
reviewRouter.get("/:id", getOneReviewHandler);
reviewRouter.post("/", postReviewHandler);
reviewRouter.delete("/:id", deleteReviewHandler);
reviewRouter.put("/:id", putReviewHandler)

module.exports = reviewRouter;