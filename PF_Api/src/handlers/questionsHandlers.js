const {
  createQuestion,
  getSellerQuestions,
  getCustomerQuestions,
  getProductQuestions,
  getServiceQuestions,
  setAnswer,
  deleteQuestion,
} = require("../controllers/serviceControllers.js");

module.exports = {
  postQuestionsHandler: async (req, res) => {
    const { question, offertype, customerId } = req.body;
    const { offerId } = req.params;
    try {
      if(!question) throw new Error('Question content missing')
      if(!customerId) throw new Error('Customer unknown')
      if(!offerId) throw new Error('Question unrelated to an offer')
      if (offertype === "service" || offertype === "porduct") {
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
  getQuestionsHandler: async (req, res) => {
    try {
    } catch (error) {}
  },
};
