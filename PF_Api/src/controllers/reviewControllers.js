const { Review } = require("../db.js");

module.exports = {
postReview: async ({text, kind, kind_id, customer_id, score})=>{
    console.log('Controller review from: ', customer_id);
    const newReview = await Review.create({text, kind, kind_id, customer_id, score});
    return newReview;
},
getOneReview: async (id)=> await Review.findByPk(id),
putReview: async ( id, data )=> {
    const rew = await Review.findByPk(id);
    await rew?.update(data);
    return await rew?.save();
},
getReview: async (kind)=> await Review.findAll({
    where: {
        kind: kind
    }
}), 
deleteReview: async (id)=> await Review.destroy({ where: { id: id }}),
}