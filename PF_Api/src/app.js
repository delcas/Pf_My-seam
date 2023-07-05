const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
require("dotenv").config();
const { ACCESS1, ACCESS2 } = process.env;

require("./db.js");

const server = express();
//Verificar origin:
const originArray = [ ACCESS1, ACCESS2 ];
console.log(originArray);
// Configurar CORS

server.name = "API";

server.use((req, res, next) => {
  const req_origin = req.headers.origin
  const origin = originArray.find((e)=> e === req_origin) ? req_origin : null;
  console.log(origin);
  cors({    
    origin: origin, // Cambiar esto con el origen de tu cliente
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization, x-access-token",
  });
  next();
}
);
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
