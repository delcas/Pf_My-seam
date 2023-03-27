const { Questserv, Questprod } = require("../db.js");

module.exports = {
  createQuestion: async ({ offertype, question, customerId, offerId }) => {
    if (offertype === "service") {
      return await Questserv.create({
        question,
        user_id: customerId,
        service_id: offerId,
      });
    }
    if (offertype === "product") {
      const quest = await Questprod.create({
        question,
        user_id: customerId,
        product_id: offerId,
      });
      console.log('quest recien creado Controller', quest);
      return quest;
    };
  },
  setAnswer: async ({ offertype, questId, answer }) => {
    if (offertype === "service") {
      const quest = await Questserv.findByPk(questId);
      await quest.update({answer});
      return await quest.save();
    }
    if (offertype === "product") {
      console.log('answering prod quest controller');
      const quest = await Questprod.findByPk(questId);
      await quest.update({answer});
      return await quest.save();
    }
  },
  getQuestion: async ({ offertype, questId }) => {
    if (offertype === "service") {
      console.log('Controlling q-serv getter');
    return await Questserv.findByPk(questId);
  }
  if (offertype === "product") {
    console.log('Controlling q-prod getter');
    return await Questprod.findByPk(questId);
  }
  },
  getSellerQuestions: async () => {
    await Questserv.findByPk();
  },
  getCustomerQuestions: async () => {
    await Questserv.findAll();
  },
  getProductQuestions: async () => {
    await Questserv.findAll();
  },
  getServiceQuestions: async () => {
    await Questserv.findAll();
  },
  deleteQuestion: async () => {
    await Questserv.findAll();
  },
};
