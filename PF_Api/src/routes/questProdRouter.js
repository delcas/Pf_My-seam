const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/questionsHandlers.js");
const questProdRouter = Router();

const prod_path = '/product'
questProdRouter.get(prod_path, getQuestionsHandler );
questProdRouter.post(`${prod_path}/:offerId`, postQuestionsHandler );


module.exports = questProdRouter;