const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const db = require('./db')
//requiero el modelo de usuarios
/* const User = require(./models/User) */


//para passport 
/* const cokieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const localStrategy = require("passport-local").Strategy */


const volleyball = require('volleyball')
app.use(cors())
app.use(express.json())


//Sabri: Si trabajamos con Passport y mongodb, si o si tiene que haber una lógica de autenticación
//Aunque esto puede que lo mueva de server y vaya a una carpeta config
/* app.use(cokieParser()) */

//Almacena la sesiones de los usuarios
/* app.use(session({
  secret: 'six-coffe',
  resave: false,
  saveUninitialized: true,

})) */

//Passport inicializacion y session
/* app.use(passport.initialize())
app.use(passport.session())
 */

//Estrategia de autenticación




app.use("/api", routes);
app.use(volleyball);
app.use(express.static('public'))
app.use("/", (req, res, next) => res.redirect("/api"));




app.listen(3030, () => {
  console.log("Servidor corriendo en el puerto http://localhost:3030");
})


