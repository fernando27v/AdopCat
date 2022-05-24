require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
const routes = require("./routes");

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.name = "API";
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  server.use("/api",routes)


server.use((err, req, res, next) => {
  
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

  module.exports = server;