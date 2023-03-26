const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/questProdHandlers.js");
const questProdRouter = Router();

questProdRouter.get("/", getQuestionsHandler );
questProdRouter.post("/:offerId", postQuestionsHandler );


module.exports = questProdRouter;