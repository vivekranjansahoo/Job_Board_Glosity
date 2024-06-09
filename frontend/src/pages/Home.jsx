import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <h1>Job Board</h1>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            {" "}
            <p className="btn btn-ghost text-xl">Job Board </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <li>About us</li>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signup" className="btn btn-accent mr-4 ">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-warning ">
            Sign In
          </Link>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello Glosity!!!</h1>
            <br /> <br />
            <h2>
              <b>Objective:</b>
            </h2>
            <p>
              Create a basic Job Portal Website where there will be separate
              Login/Signup for Recruiters & Candidates applying for jobs.
              <br />
              <br />
              <br />
              For Recruiters : Recruiters can post Jobs in the platform, they
              can have CRUD ( CREATE READ, UPDATE DELETE ) functionality on
              their Job Posting which will also include JDs ( Job Description )
              as well as they can see all the candidates applied and their
              contact details ( email & phone numbers ).
              <br />
              <br />
              <br />
              For Applications : Applicants can signup and enter their basic
              details including their contact details & skillset and then on the
              feed / job board section they can apply to the jobs posted by the
              recruiters.
            </p>
            <h1 className="mt-3">
              <b>BY Vivek Ranjan Sahoo</b>
            </h1>
            <Link to="/signup">
              {" "}
              <button className="btn btn-primary mt-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
