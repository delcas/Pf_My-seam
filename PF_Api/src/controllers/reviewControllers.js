const { Review } = require("../db.js");

const postReview = async ({text, kind, kind_id, customer_id, score})=>{
    console.log('Ctrller: ', {text, kind, kind_id, customer_id, score} );
    const newReview = await Review.create({text, kind, kind_id, customer_id, score});
    return newReview;
}
const getReview =  ()=> Review.findAll()

const deleteReview = (id)=> Review.destroy({ where: { id: id }});


module.exports = {getReview, deleteReview, postReview}