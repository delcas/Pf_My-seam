const Review = require("../models/Review")

const postReview = async ({text, kind, kindID, score})=>{
    const newReview = await Review.create(text, kind, kindID, score);
    return newReview;
}
const getReview =  ()=> Review.findAll()

const deleteReview = (id)=> Review.destroy({ where: { id: id }});


module.exports = {getReview, deleteReview, postReview}