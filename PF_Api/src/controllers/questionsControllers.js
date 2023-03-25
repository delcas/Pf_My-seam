const { QuestServ, QuestProd } = require("../db.js");

module.exports = {
  createQuestion: async ({ question, offertype, customerId, offerId }) => {
    if (offertype === "service") {
      await QuestServ.create({
        question,
        user_id: customerId,
        service_id: offerId,
      });
    }
    if (offertype === "product") {
      await QuestProd.create({
        question,
        user_id: customerId,
        product_id: offerId,
      });
    }
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
  setAnswer: async () => {
    await Service.findAll();
  },
  deleteQuestion: async () => {
    await Service.findAll();
  },
};
