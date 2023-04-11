const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    role: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userModel);
