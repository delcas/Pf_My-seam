const {
  createQuestion,
  getQuestion,
  getSellerQuestions,
  getCustomerQuestions,
  getOfferQuestions,
  setAnswer,
  deleteQuestion,
} = require("../controllers/questionsControllers.js");

module.exports = {
  postQuestionsHandler: async (req, res) => {
    const { question, customerId } = req.body;
    const { offerId } = req.params;
    const offertype = req.path.split("/")[1];
    try {
      if (!question) throw new Error("Question content missing");
      if (!customerId) throw new Error("Customer unknown");
      if (isNaN(customerId))
        throw new Error("The customer Id must be a number");
      if (!offerId) throw new Error("Question unrelated to an offer");
      if (isNaN(offerId)) throw new Error("The customer Id must be a number");
      if (offertype === "service" || offertype === "product") {
        console.log("Creating Question -(at Handler)-");
        const quest = await createQuestion({
          offertype,
          question,
          customerId,
          offerId,
        });
        console.log(quest);
        res.status(201).json(quest);
      } else {
        throw new Error("Offer type is not specified correctly");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  setAnswerHandler: async (req, res) => {
    const offertype = req.path.split("/")[1];
    const { answer } = req.body;
    const { questId } = req.params;
    try {
      if (!answer) throw new Error("Answer content missing");
      if (!questId) throw new Error("Missing question reference");
      if (isNaN(questId)) throw new Error("The customer Id must be a number");
      if (offertype === "service" || offertype === "product") {
        console.log("answering prod quest handler");
        const quest = await setAnswer({ offertype, questId, answer });
        res.status(201).json(quest);
      } else {
        throw new Error("Offer type is not specified correctly");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  getQuestionsHandler: async (req, res) => {
    const offertype = req.path.split("/")[1];
    const { offerId, sellerId, customerId } = req.body;
    const { questId } = req.query;
    try {
      console.log("Handling getter");
      if (questId) {
        if (isNaN(questId)) throw new Error("Question Id must be a number");
        const quest = await getQuestion({ offertype, questId });
        res.status(200).json(quest);
      }
      if (offerId) {
        if (isNaN(offerId))
          throw new Error(`The ${offertype} Id must be a number`);
        const quest = await getOfferQuestions({ offertype, offerId });
        res.status(200).json(quest);
      }
      if (customerId) {
        if (isNaN(customerId))
          throw new Error("The customer Id must be a number");
        const quest = await getCustomerQuestions({ offertype, customerId });
        res.status(200).json(quest);
      }
      if (sellerId) {
        if (isNaN(sellerId)) throw new Error("The seller Id must be a number");
        const quest = await getSellerQuestions({ offertype, sellerId });
        res.status(200).json(quest);
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
  },
  deleteHandler: async (req, res) => {
    const offertype = req.path.split("/")[1];
    const { questId } = req.body;
    try {
      if (isNaN(questId)) throw new Error("Question Id must be a number");
      await deleteQuestion({ offertype, questId });
      res.status(200).send("Pregunta borrada con éxito");
    } catch (error) {
      res.status(404).send(error.message);
    }
  },
};
