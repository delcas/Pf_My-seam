const {
  createQuestion,
  getQuestion,
  getSellerQuestions,
  getCustomerQuestions,
  getProductQuestions,
  getServiceQuestions,
  setAnswer,
  deleteQuestion,
} = require("../controllers/questionsControllers.js");

module.exports = {
  postQuestionsHandler: async (req, res) => {
    const { question, offertype, customerId } = req.body;
    const { offerId } = req.params;
    console.log('handler question, line16', question);
    console.log('handler offertpye, line17', offertype);
    console.log('handler custID, line18', customerId);
    console.log('handler ProdID, line19', offerId);
    try {
      if(!question) throw new Error('Question content missing')
      if(!customerId) throw new Error('Customer unknown')
      if(!offerId) throw new Error('Question unrelated to an offer')
      if (offertype === "service" || offertype === "product") {
        console.log("Creating Question -(Handler)-");
        await createQuestion({ question, offertype, customerId, offerId });
        res.status(201).send("Question sent");
      } else {
        throw new Error("Offer type is not specified correctly");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  setAnswerHandler: async (req, res) => {
    const { id, answer } = req.body;
    try {
      await setAnswer({ id, answer })
    } catch (error) {}
  },
  getQuestionsHandler: async (req, res) => {
    const { id } = req.body;
    try {
      const quest = await getQuestion({ id });
      res.status(200).json(quest);
    } catch (error) {
      res.status(404).send(error.message)
    }
  },
};
