const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler, setAnswerHandler } = require("../handlers/questionsHandlers.js");
const questProdRouter = Router();

const prod_path = '/product'
questProdRouter.get(prod_path, getQuestionsHandler );
questProdRouter.post(`${prod_path}/:offerId`, postQuestionsHandler );
questProdRouter.put(`${prod_path}/:questId`, setAnswerHandler );

module.exports = questProdRouter;