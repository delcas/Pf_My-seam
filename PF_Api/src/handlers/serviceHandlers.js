const {serviceCreator, getAService, getServices} = require("../controllers/serviceControllers.js");

const getAServiceHandler = async (req,res) => {
  const { id } = req.params;
  try {
    const service = await getAService(id);
    res.status(200).json(service);
  }
  catch(error) {
    res.status(404).json({ error: error.message });
  }
}

const getServicesHandler = async (req,res) => {
  const { name } = req.query;
  try {
    const services = await getServices(name);
    res.status(200).json(services);
  }
  catch(error) {
    res.status(404).json({ error: error.message });
  }
}

const postServiceHandler = async (req,res) => {
  const { name, description, price } = req.body;
  try {
    const service = await serviceCreator(name, description, price);
    res.status(201).json(service);
  }
  catch(error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  postServiceHandler,
  getServicesHandler,
  getAServiceHandler,
};
