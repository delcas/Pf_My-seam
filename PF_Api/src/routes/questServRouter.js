const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/questProdHandlers.js");
const questServRouter = Router();

questServRouter.get("/", getQuestionsHandler );
questServRouter.post("/:offerId", postQuestionsHandler );


module.exports = questServRouter;