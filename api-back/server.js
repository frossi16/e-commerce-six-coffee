const express = require('express')
const routes = require("./routes")
const cors = require('cors')
const app = express()
require('./db')
app.use(cors())
app.use(express.json())

app.use("/api",routes)

app.listen(3030, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3030");
  })
  // )

