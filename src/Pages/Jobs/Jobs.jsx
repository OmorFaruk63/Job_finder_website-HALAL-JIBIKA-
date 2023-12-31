// Importing necessary dependencies and styles
import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { context } from "../../context/Global/GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
import "./Jobs.css"; // Assuming this is the style file for Jobs component

// Functional component definition
const Jobs = () => {
  // Fetching job data using useLoaderData hook
  const jobs = useLoaderData();

  // Destructuring values from the context and state
  const { setEdit, handleFavorite } = useContext(context);
  const [data, setData] = useState(jobs?.data);
  const [count, setCount] = useState(jobs?.data);

  // Geting user authentication status
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Redirecting based on user authentication status
  if (user) {
    navigate("/jobs");
  } else {
    navigate("/signup");
  }

  // Handling job deletion
  function handleDeleteJob(id) {
    axios
      .delete(`http://localhost:9000/jobs/${id}`)
      .then((res) => toast.success("Delete Successful"))
      .catch((err) => console.log(err));
    setCount(count + 1);
  }

  // Rendering job cards
  return (
    <div>
      {data.map((job) => (
        <div key={job?.id} className="job-card">
          <div className="card-img">
            <img src={job.logo} alt={`Logo for ${job?.companyName}`} />
          </div>
          <div className="card-content">
            <h2>Job Title: {job?.title}</h2>
            <h4>CompanyName: {job?.companyName}</h4>
            <p>Position: {job?.position}</p>
            <p>Description: {job?.description}</p>
            <p>
              <FaLocationDot /> Work from anywhere.
            </p>
            <div className="card-btn">
              <Link to={`/jobs/${job?.id}`}>
                <button>View Job </button>
              </Link>
              <button onClick={() => handleDeleteJob(job?.id)}>
                Delete Job
              </button>
              <Link to={"/editJob"}>
                <button onClick={() => setEdit(job)}>Edit Job</button>
              </Link>
              <button onClick={() => handleFavorite(job?.id)}>
                Add to favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
