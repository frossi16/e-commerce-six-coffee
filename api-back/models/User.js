const mongoose = require("mongoose");
const { Schema } = mongoose;
const Bcrypt = require("bcrypt");
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,

      unique: true,
    },
    admin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
   
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await Bcrypt.genSalt(10);
  return await Bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await Bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
