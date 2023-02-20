const mongoose = require("mongoose");

// basic structure
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const userModal = mongoose.model("user", userSchema);

module.exports = {
  userModal,
};
