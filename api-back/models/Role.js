const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
