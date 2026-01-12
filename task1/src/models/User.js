const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true
    },
    dob: {
      type: Date
    },
    address: {
      type: String
    },
    phone: {
      type: String
    },
    state: {
      type: String
    },
    zipCode: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      index: true
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"]
    },
    userType: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
