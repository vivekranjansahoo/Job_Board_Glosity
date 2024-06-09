import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Test from "./components/test";
import Signup from "./components/Auth/Signup";
import JobBoard from "./components/Jobs/JobBoard";
import RecruiterJobList from "./components/Jobs/RecruiterJobList";

import ApplicantsPage from "./components/Jobs/ApplicantsList";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<JobBoard />} />
      <Route path="/jobs/recruiter" element={<RecruiterJobList />} />
      <Route path="/jobs/recruiter/:jobId" element={<ApplicantsPage />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Test />} />
    </Routes>
  );
};

export default App;
