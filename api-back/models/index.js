const { Schema, model } = require("mongoose");
const Bcrypt = require("bcrypt");
//const saltRounds = 10;
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

//creacion del password ante de q envie la infomacion{maxi/sabri}

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
});
//compara si la password es correcta{maxi/sabri}

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

module.exports = model("user", UserSchema);
