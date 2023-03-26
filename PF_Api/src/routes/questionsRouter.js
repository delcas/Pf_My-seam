const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/questionsHandlers.js");
const questionsRouter = Router();

questionsRouter.get("/", getQuestionsHandler );
questionsRouter.post("/:offerId", postQuestionsHandler );


module.exports = questionsRouter;