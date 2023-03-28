const { Questserv, Questprod } = require("../db.js");
const preloadquests = require("../utils/services.json");

let Offer;

module.exports = {
  createQuestion: async ({ offertype, question, customerId, offerId }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Creating quest controller");
    return await Offer.create({
      question,
      user_id: customerId,
      offer_id: offerId,
    });
  },
  setAnswer: async ({ offertype, questId, answer }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Answering quest controller");
    const quest = await Offer.findByPk(questId);
    await quest.update({ answer });
    return await quest.save();
  },
  getQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Controlling quest getter");
    return await Offer.findByPk(questId);
  },
  getOfferQuestions: async ({ offertype, offerId }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Controlling quest by offer getter");
    return await Offer.findAll({
      where: {
        offer_id: offerId,
      },
    });
  },
  getCustomerQuestions: async ({ offertype, customerId }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Controlling quest by offer getter");
    return await Offer.findAll({
      where: {
        user_id: customerId,
      },
    });
  },
  deleteQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (Offer = Questserv);
    offertype === "product" && (Offer = Questprod);
    console.log("Controlling quest getter");
    return await Offer.destroy({
      where: {
        id: questId
      }
    })
  },
  // getSellerQuestions: async ({ offertype, offerId }) => {
  //   const serv_quest = await Questserv.findAll({
  //     
  //   });
  //   const prod_quest = await Questprod.findAll({
  //     
  //   });
  //    const ans = serv_quest.concat(prod_quest);
  //    return ans;
  // }
};
