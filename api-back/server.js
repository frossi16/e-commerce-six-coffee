const express = require("express");
const cors = require("cors");
const app = express();
const appRoutes = require("./routes");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(volleyball);
app.use(express.static("public"));
app.use("/", appRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});




// TRAE BASE DE DATOS DE PRODUCTOS

const mongoose = require("mongoose");

const connection = mongoose.connection;

connection.once("open", async function () {
  const collection = connection.db.collection("products");

  collection.find({}).toArray(function (err, data) {
    console.log(data);
  });
});
