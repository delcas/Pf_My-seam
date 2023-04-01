const { Router } = require("express");
const { 
  getAServiceHandler, 
  getServicesHandler, 
  postServiceHandler, 
  deleteServiceHandler,
  putServiceHandler
 } = require("../handlers/serviceHandlers")
const serviceRouter = Router();

serviceRouter.get("/", getServicesHandler);
serviceRouter.get("/:id", getAServiceHandler);
serviceRouter.post("/", postServiceHandler);
serviceRouter.delete("/:id", deleteServiceHandler);
serviceRouter.put("/:id", putServiceHandler)

module.exports = serviceRouter;