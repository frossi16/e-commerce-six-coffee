const express = require('express')
const cors = require('cors')
const app = express()
const appRoutes = require("./routes")
const volleyball = require('volleyball')
require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.json());

app.use(volleyball);
app.use(express.static('public'))
app.use("/", appRoutes);

const PORT = process.env.PORT;

//no corre el server por eso lo manipulo con el 3030
app.listen(3030, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


