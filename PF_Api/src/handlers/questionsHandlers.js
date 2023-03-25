const { createQuestion, getSellerQuestions, getCustomerQuestions, getProductQuestions, getServiceQuestions, setAnswer, deleteQuestion} = require("../controllers/serviceControllers.js");

module.exports = {
  postQuestionsHandler: async (req, res) => {
    try {
      const { question, offertype, customerId } = req.body;
      const { offerId } = req.params;
      console.log('Creating Question-(Handler)-');
      await createQuestion();
      res.status(200).send('Question sent')
    } catch (error) {
      
    }
  },
  getQuestionsHandler: async (req, res) => {
    try {
      
    } catch (error) {
      
    }
  },
};
