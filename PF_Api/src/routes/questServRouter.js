const { Router } = require("express");
const { getQuestionsHandler, postQuestionsHandler } = require("../handlers/questionsHandlers.js");
const questServRouter = Router();

const prod_path = '/service'
questServRouter.get(prod_path, getQuestionsHandler );
questServRouter.post(`${prod_path}/:offerId`, postQuestionsHandler );


module.exports = questServRouter;