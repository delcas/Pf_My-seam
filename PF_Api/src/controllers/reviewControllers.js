const Review = require("../models/Review")

const getReview =  ()=> Review.findAll()



module.exports = {getReview}