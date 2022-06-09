const express = require("express");
const routes = express.Router();
const cors = require("cors");
const BodyParser = require("body-parser"); //parseo del jaseom para el password {maxi/sabri}
const appRoutes = require("./routes"); // requiero el index de routes {maxi}
const app = express();
// const mongoose = require('mongoose')
require("./db");
// const User = require('./models')
app.use(cors());
app.use(express.json());
app.use(BodyParser.json());

// DESVIO LA RUTA A INDEX PARA AHI PODER SEPARARLA AL CONTROLLER {maxi}
app.use("/", appRoutes);

// const user2 = mongoose.model('user',User )

// app.post('/', (req,res,next)=>{
//   // // console.log(req.body + '   req body')
//   //  const newUser = new User(req.body);
//   // // console.log(newUser + '          newuser')
//   // await newUser.save();
//     // res.send(newUser)

//   User.create(req.body)
//   .then(asd => res.send(asd))
//   .catch(err => console.log(err))
// })

// db.sync({force: true}).then(()=>
app.listen(3030, () => {
  console.log("Servidor corriendo en el puerto http://localhost:3030");
});
// )
