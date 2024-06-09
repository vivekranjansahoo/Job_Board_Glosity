import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import JobEditModal from "./JobEdit";
import JobCreateModal from "./JobCreate";
import { job } from "../../Routes/Allroutes";

const RecruiterJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const name = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).name;
  const recruiterId = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).id;
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`${job}/recruiter/${recruiterId}`);
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleEditClick = (jobId) => {
    setSelectedJobId(jobId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJobId(null);
  };

  const ModalClose = () => {
    setIsModalOpen(false);
  };

  const handleJobUpdated = async () => {
    const res = await axios.get(`${job}/recruiter/${recruiterId}`);
    setJobs(res.data);
  };

  const deleteJob = async (jobId) => {
    try {
      await axios.delete(`${job}/${jobId}`);
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleJobCreated = async (newJob) => {
    setJobs([...jobs, newJob]);
    await fetchJobs();
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
        Recruiter Dashboard
      </h1>
      <h1 className="text-3xl font-bold mb-6">My Job Posts (Name : {name})</h1>
      <label htmlFor="jobCreateModal" className="btn btn-primary mb-4">
        Create Job
      </label>
      <JobCreateModal onJobCreated={handleJobCreated} onClose={ModalClose} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <p>Description: {job.description}</p>
                <p>Salary: ${job.salary}K</p>
                <p>Vacation: {job.vacation}</p>
                <button
                  className="btn btn-warning mt-4"
                  onClick={() => handleEditClick(job._id)}
                >
                  Edit
                </button>
                <Link
                  to={`/jobs/recruiter/${job._id}`}
                  className="btn btn-info mt-4"
                >
                  <button>View</button>
                </Link>

                <button
                  onClick={() => deleteJob(job._id)}
                  className="btn btn-error mt-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <tr>
            <td colSpan="4">No jobs found</td>
          </tr>
        )}

        {isModalOpen && (
          <JobEditModal
            jobId={selectedJobId}
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onJobUpdated={handleJobUpdated}
          />
        )}
      </div>
    </div>
  );
};

export default RecruiterJobList;
