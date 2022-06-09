const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')

const volleyball = require('volleyball')

const BodyParser = require("body-parser"); //parseo del jaseom para el password {maxi/sabri}
const appRoutes = require("./routes"); // requiero el index de routes {maxi}

app.use(cors());
app.use(express.json());
app.use(BodyParser.json());

app.use(volleyball);
app.use(express.static('public'))
app.use("/", appRoutes);
app.listen(3030, () => {
  console.log("Servidor corriendo en el puerto http://localhost:3030");
})


