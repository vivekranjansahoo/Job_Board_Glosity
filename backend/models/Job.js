const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, required: true },
  vacation: { type: Number, required: true },
  recruiterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
