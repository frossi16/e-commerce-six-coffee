const express = require("express");
const cors = require("cors");
const app = express();
//const bodyParser = require("body-parser");
const session = require("express-session");
const appRoutes = require("./routes");
const volleyball = require("volleyball");
const passport = require("passport");
require("./passport/LocalAutentificacion");
require('./passport/AouthGoogle')
require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.json());

app.use(volleyball);
app.use(express.static("public"));

app.use(
  session({
    secret: "Six-coffe",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", appRoutes);


// SERVER_PORT PARA EL BACK
// PORT PARA EL FRONT
const PORT = process.env.SERVER_PORT;


//no corre el server por eso lo manipulo con el 3030
app.listen(3030, () => {

  console.log(`Servidor corriendo en el puerto 3030`);
});

// // TRAE BASE DE DATOS DE PRODUCTOS

// const mongoose = require("mongoose");

// const connection = mongoose.connection;

// connection.once("open", async function () {
//   const collection = connection.db.collection("products");

//   collection.find({}).toArray(function (err, data) {
//     console.log(data);
//   });
// });
