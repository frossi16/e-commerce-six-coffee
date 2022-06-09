const express = require('express')
const { User } = require('../models/Users')
const routersUser = express.Router()
const passport = require('passport')



//Ruta ya hecha y pasada a controller/services
/* routersUser.post('/register', (req, res, next) => {
    console.log(req.body, 'req body')

   
    
 const newUser = new User(req.body);
 console.log(newUser, '          newuser')
 await newUser.save();
 res.send(newUser) 

    User.Create(req.body)
        .then(newUser => res.status(201).send(newUser))
        .catch(err => console.log(err))
})
 */

//Sabri: Dejo esto comentado, así en el marge no rompe y después sigo trabajando
//Antes no tenía logica de sequalize, creo que mongoose debería funcionar igual
/* routersUser.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('El usuario logro loguearse')
    res.send(req.user)
        .catch((error) => res.status(500).send(error))
})
 */

/* routersUser.post('/logout', function (req, res, next) {
    console.log('El usuario se deslogueo')
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}); */


module.exports = routersUser;