//modelo de users con mongoosse
//solo para probar rutas de user
//luego reemplazar por modelos de user de Ari
/* const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
       date: { type: Date, default: Date.now }, 
    },

    {
        timestamps: true,
        versionKey: false,
    });

    //Sabri: Debajo del modelo de Ari iría el bcrypt primero, antes de pasar a passport
    userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(16));
};

userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};

    
module.exports = model('User', UserSchema); */
/* https://www.youtube.com/watch?v=NN-Jt6EjFAc */
/* https://www.youtube.com/watch?v=EpomajNVcMk&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=17 */



