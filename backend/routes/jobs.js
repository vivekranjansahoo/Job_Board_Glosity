const express = require("express");
const Job = require("../models/Job");
const User = require("../models/User");
const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description, salary, vacation, recruiterId } = req.body;
  try {
    const newJob = new Job({
      title,
      description,
      salary,
      vacation,
      recruiterId,
    });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/recruiter/:recruiterId", async (req, res) => {
  try {
    const recruiterId = req.params.recruiterId;
    const jobs = await Job.find({ recruiterId: recruiterId });

    if (!jobs) {
      return res.status(404).json({ msg: "No jobs found for this recruiter" });
    }

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("recruiterId", "name email phone");
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "applicants",
      "name email phone skills"
    );
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  const { title, description, salary, vacation } = req.body;
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { title, description, salary, vacation },
      { new: true }
    );
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Job.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "job deleted successfully", data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
});

router.post("/:id/apply", async (req, res) => {
  const { userId } = req.body;
  try {
    const job = await Job.findById(req.params.id);
    job.applicants.push(userId);
    await job.save();
    res.status(200).json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
