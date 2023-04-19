const {serviceCreator, getAService, getServices, deleteService, updateService} = require("../controllers/serviceControllers.js");

const getAServiceHandler = async (req,res) => {
  const { id } = req.params;
  try {
    console.log('Service Id Handler: ', id);
    res.status(200).json(await getAService(id));
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
  const data = req.body;
  try {
    const service = await serviceCreator(data);
    res.status(201).json(service);
  }
  catch(error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteServiceHandler = async (req,res) => {
  const { id } = req.params;
  try{
    const service = await deleteService(id);
    res.status(200).json(service);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const putServiceHandler = async (req,res) => {
  const { id } = req.params;
  const data = req.body;
  try{
    const service = await updateService(id,data);
    res.status(200).json(service);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  postServiceHandler,
  getServicesHandler,
  getAServiceHandler,
  deleteServiceHandler,
  putServiceHandler,
};
