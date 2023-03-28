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
    console.log("Answering quest controller");
    const quest = await OfferQ.findByPk(questId);
    await quest.update({ answer });
    return await quest.save();
  },
  getQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controlling quest getter");
    return await OfferQ.findByPk(questId);
  },
  getOfferQuestions: async ({ offertype, offerId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controlling quest by offer getter");
    return await OfferQ.findAll({
      where: {
        offer_id: offerId,
      },
    });
  },
  getCustomerQuestions: async ({ offertype, customerId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controlling quest by offer getter");
    return await OfferQ.findAll({
      where: {
        user_id: customerId,
      },
    });
  },
  deleteQuestion: async ({ offertype, questId }) => {
    offertype === "service" && (OfferQ = Questserv);
    offertype === "product" && (OfferQ = Questprod);
    console.log("Controlling quest getter");
    return await Offer.destroy({
      where: {
        id: questId,
      },
    });
  },
  getSellerQuestions: async ({ offertype, sellerId }) => {
    // if (offertype) {
    let Offer;
    if (offertype === "service") {
      OfferQ = Questserv;
      Offer = Service;
    }
    if (offertype === "product") {
      OfferQ = Questprod;
      Offer = Product;
    }
    console.log("Controlling quest getter");
    return await OfferQ.findAll({
      include: [
        {
          model: Offer,
          attributes: ["userid"],
          where: { userid: sellerId },
        },
      ],
    });
    // };
    /*
    const serv_quest = await Questserv.findAll({
    attributes: ['*'],
      include: [{
    model: Service,
    where: { userid: sellerId },
    required: false 
  }],
    });
    const prod_quest = await Questprod.findAll({
      attributes: ['*'],
      include: [{
    model: Product,
    where: { userid: sellerId },
    required: false 
  }],
    });
     const ans = serv_quest.concat(prod_quest);
     return ans;
     */
  },
};
