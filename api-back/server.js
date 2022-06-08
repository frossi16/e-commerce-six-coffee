const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db");
const bodyParser = require('body-parser')
const routes = require("./routes")

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());



app.use("/api" ,routes)



const PORT = process.env.PORT;

app.listen(3030, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
