const {putReview, getOneReview, getReview, postReview, deleteReview} = require("../controllers/reviewControllers.js");

const postReviewHandler = async (req,res) => {
  const data = req.body;
  try {
    const service = await postReview(data);
    return res.status(201).json(service);
  }
  catch(error) {
    res.status(400).json({ error: error.message });
  }
}
const getOneReviewHandler = async (req,res) => {
  const { id } = req.params;
  try {
    const service = await getOneReview(id);
    res.status(200).json(service);
  }
  catch(error) {
    res.status(404).json({ error: error.message });
  }
}

const getReviewHandler = async (req,res) => {
  const { kind } = req.query;
  try {
    const services = await getReview(kind);
    res.status(200).json(services);
  }
  catch(error) {
    res.status(404).json({ error: error.message });
  }
}


const deleteReviewHandler = async (req,res) => {
  const { id } = req.params;
  try{
    const service = await deleteReview(id);
    res.status(200).json(service);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const putReviewHandler = async (req,res) => {
  const { id } = req.params;
  const data = req.body;
  try{
    const service = await putReview(id,data);
    res.status(200).json(service);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  postReviewHandler,
  getReviewHandler,
  getOneReviewHandler,
  deleteReviewHandler,
  putReviewHandler,
};
