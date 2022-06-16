const nodemailer = require("nodemailer");


const transportador = nodemailer.createTransport({
  host: "smtp.gmail.com",
  post: 465,
  secure: true,
  auth: {
    user: "sixcofee@gmail.com",
    pass: "jxbtxfeurnbbhdrw",
  },
});

transportador.verify().then(() => {
  console.log("verificacion de nodemailer");
});
module.exports = transportador;
