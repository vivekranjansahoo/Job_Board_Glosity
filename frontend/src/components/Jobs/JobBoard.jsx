import React, { useState, useEffect } from "react";
import axios from "axios";
import { job } from "../../Routes/Allroutes";
import RecruiterDetailsModal from "./RecruiterDetailsModal";
import { Link, useNavigate } from "react-router-dom";
const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(job);
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  const applyToJob = async (jobId) => {
    const userId = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    ).id;
    try {
      await axios.post(`${job}/${jobId}/apply`, { userId });
      alert("Applied successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const handleViewClick = (recruiter) => {
    console.log(recruiter);
    setSelectedRecruiter(recruiter);
  };

  return (
    <div className="container mx-auto mt-10">
      <Link to="/">
        <h1 className="text-3xl font-bold mb-6">Job Board</h1>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">{job.title}</h2>
              <p>Description: {job.description}</p>
              <p>salary: ${job.salary}K</p>
              <p>vacation: {job.vacation}</p>
              <button
                className="btn btn-warning"
                onClick={() => handleViewClick(job.recruiterId)}
              >
                View
              </button>
              <button
                onClick={() => applyToJob(job._id)}
                className="btn btn-primary mt-4"
              >
                Apply
              </button>

              {selectedRecruiter && (
                <RecruiterDetailsModal
                  recruiter={selectedRecruiter}
                  onClose={() => setSelectedRecruiter(null)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
