const { Questserv, Questprod } = require("../db.js");

module.exports = {
  createQuestion: async ({ question, offertype, customerId, offerId }) => {
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
  getQuestion: async (id) => {
    return await Questprod.findByPk({id});
  },
  getSellerQuestions: async () => {
    await Service.findByPk();
  },
  getCustomerQuestions: async () => {
    await Service.findAll();
  },
  getProductQuestions: async () => {
    await Service.findAll();
  },
  getServiceQuestions: async () => {
    await Service.findAll();
  },
  setAnswer: async ({ id, answer }) => {
    await Service.findAll();
  },
  deleteQuestion: async () => {
    await Service.findAll();
  },
};
