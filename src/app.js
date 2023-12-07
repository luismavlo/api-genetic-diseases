//1. importar express
const express = require("express");
const geneticDiseasesRouter = require("./genetic-diseases/genetic-diseases.route");
const cors = require("cors");

//2. crearnos una constante app que tendra
//todas las funcionalidades de express
const app = express();

const calculateRequestTime = (req, res, next) => {
  const requestTime = new Date().toISOString();

  req.requestTime = requestTime;
  next();
};

app.use(express.json()); //permitir poder obtener el body en formato json
app.use(express.urlencoded({ extended: true })); //permitir poder obtener el body en formato url-encoded
app.use(calculateRequestTime);
app.use(cors());

app.use("/api/v1", geneticDiseasesRouter);

module.exports = app;
