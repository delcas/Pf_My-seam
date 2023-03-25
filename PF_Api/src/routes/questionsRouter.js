const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/userHandlers.js");
const questionsRouter = Router();

questionsRouter.get("/", getQuestionsHandler );
questionsRouter.post("/", postQuestionsHandler );

module.exports = questionsRouter;