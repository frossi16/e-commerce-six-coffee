const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.listen(3030, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3030");
  });