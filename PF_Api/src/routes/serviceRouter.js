const { Router } = require("express");
const { 
  getAServiceHandler, 
  getServicesHandler, 
  postServiceHandler, 
  deleteServiceHandler
 } = require("../handlers/serviceHandlers")
const serviceRouter = Router();

serviceRouter.get("/", getServicesHandler);
serviceRouter.get("/:id", getAServiceHandler);
serviceRouter.post("/", postServiceHandler);
serviceRouter.delete("/:id", deleteServiceHandler);

module.exports = serviceRouter;