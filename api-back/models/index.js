const { Schema, model } = require("mongoose");
const Bcrypt = require("bcrypt");
const saltRounds = 10;
const UserSchema = new Schema(
  {
    name: { type: String, trim: true, unique: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//creacion del password antes de que envie la infomacion{maxi/sabri}
//mover al modelo de Users Ari
/* UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
}); */
//compara si la password es correcta{maxi/sabri}

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  Bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return console.log(err), next(err);

    Bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return console.log(err), next(err);
      user.password = hash;
      next();
    });
  });
});

//compara si la password es correcta{maxi/sabri}
/* UserSchema.methods.comparePassword = function (plaintext, callback) {
  Bcrypt.compare(plaintext, this.password, function (err, callback) {
    
    if (err) return err;
    callback(isMatch); 
  });
}; */

/* UserSchema.methods.validatedPassword = function(plaintext){
  return this.plaintext === this.Bcrypt.hash(plaintext)
} */

/* UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
}; */

module.exports = model("user", UserSchema);



