const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["candidate", "recruiter"], required: true },
  phone: { type: String, required: true },
  skills: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
