import React, { useState } from "react";
import axios from "axios";
import { job } from "../../Routes/Allroutes";
const JobCreateModal = ({ onJobCreated, onClose }) => {
  const recruiterId = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).id;

  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    salary: "",
    vacation: "",
    recruiterId: recruiterId,
  });

  const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(jobDetails);
      const res = await axios.post(`${job}/create`, jobDetails);

      onJobCreated(res.data);
      onClose();
      document.getElementById("jobCreateModal").checked = false;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="jobCreateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Job</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Job Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={jobDetails.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="description"
              >
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                value={jobDetails.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="salary"
              >
                Salary
              </label>
              <input
                id="salary"
                name="salary"
                type="number"
                value={jobDetails.salary}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="vacation"
              >
                Vacation Days
              </label>
              <input
                id="vacation"
                name="vacation"
                type="number"
                value={jobDetails.vacation}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Create Job
              </button>
              <label htmlFor="jobCreateModal" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobCreateModal;
