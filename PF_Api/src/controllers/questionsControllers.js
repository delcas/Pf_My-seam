const { Questserv, Questprod, Product, Service } = require("../db.js");
const preloadquests = require("../utils/services.json");

let OfferQ;

module.exports = {
  createQuestion: async ({ offertype, question, customerId, offerId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Creating quest controller");
    return await OfferQ.create({
      question,
      user_id: customerId,
      offer_id: offerId,
    });
  },
  setAnswer: async ({ offertype, questId, answer }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);    
    const quest = await OfferQ.findByPk(questId);
    console.log("Answering quest controller", quest?.data);
    await quest?.update({ answer });
    return await quest?.save();
  },
  getQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controller quest getter by id");
    return await OfferQ.findByPk(questId);
  },
  getOfferQuestions: async ({ offertype, offerId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controller quest getter by offer");
    return await OfferQ.findAll({
      where: {
        offer_id: offerId,
      },
    });
  },
  getCustomerQuestions: async ({ offertype, customerId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controller quest getter by customer");
    return await OfferQ.findAll({
      where: {
        user_id: customerId,
      },
    });
  },
  deleteQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controller quest delete");
    return await Offer.destroy({
      where: {
        id: questId,
      },
    });
  },
  getSellerQuestions: async ({ offertype, sellerId }) => {
    let Offer;
    if (offertype === "service") {
      OfferQ = Questserv;
      Offer = Service;
    }
    if (offertype === "product") {
      OfferQ = Questprod;
      Offer = Product;
    }
    console.log("Controller quest getter by seller");
    return await OfferQ.findAll({
      include: [
        {
          model: Offer,
          attributes: ["userid"],
          where: { userid: sellerId },
        },
      ],
    });
  },
};
