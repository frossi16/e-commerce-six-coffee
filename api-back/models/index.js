const { Schema, model } = require("mongoose");
const Bcrypt = require("bcrypt");
// const saltRounds = 10;
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
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await Bcrypt.genSalt(10);
  return await Bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await Bcrypt.compare(password, this.password);
};

module.exports = model("user", UserSchema);
