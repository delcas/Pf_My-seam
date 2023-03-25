const { Router } = require("express");
const { getAServiceHandler, getServicesHandler, postServiceHandler } = require("../handlers/serviceHandlers")
const serviceRouter = Router();

serviceRouter.get("/", getServicesHandler);
serviceRouter.get("/:id", getAServiceHandler);
serviceRouter.post("/", postServiceHandler);

module.exports = serviceRouter;