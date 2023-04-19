const Review = require("../models/Review")

const getReview =  ()=> Review.findAll()

const deleteReview = (id)=> Review.destroy({ where: { id: id }});

const postReview = async (text, kind, kindID, score)=>{
    let newReview = await Review.create(text, kind, kindID, score);
    return newReview
}

module.exports = {getReview, deleteReview, postReview}