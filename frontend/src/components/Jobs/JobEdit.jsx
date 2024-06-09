import React, { useState, useEffect } from "react";
import axios from "axios";
import { job } from "../../Routes/Allroutes";
const JobEditModal = ({ jobId, isOpen, onClose, onJobUpdated }) => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    salary: "",
    vacation: "",
  });

  useEffect(() => {
    if (isOpen) {
      const fetchJobDetails = async () => {
        try {
          const res = await axios.get(`${job}/${jobId}`);
          setJobDetails(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchJobDetails();
    }
  }, [isOpen, jobId]);

  const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${job}/${jobId}`, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      onJobUpdated();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
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
            <label className="block text-sm font-medium mb-1" htmlFor="salary">
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobEditModal;
