// Importing necessary dependencies and styles
import { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../../context/Global/GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import "./Jobs.css";
import useFetch from "../../Hook/useFetch";
import Loading from "../../Components/Loading/Loading";

// Functional component definition
const Jobs = () => {
  // Destructuring values from the context and state
  const { setEdit, handleFavorite, user } = useContext(context);

  // Geting user authentication status
  const navigate = useNavigate();

  // Redirecting based on user authentication status
  if (!user) {
    navigate("/signup");
  }

  const { data, loading, error } = useFetch("http://localhost:9000/jobs");
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  // Handling job deletion
  function handleDeleteJob(id) {
    axios.delete(`http://localhost:9000/jobs${id}`);
    setCurrentData(currentData.filter((data) => data.id !== id));
    toast.success("Delete Successful");
  }

  return (
    <div>
      {loading ? (
        <h1>
          <Loading />
        </h1>
      ) : (
        currentData?.map((job) => (
          <div key={job?.id} className="job-card">
            <div className="card-img">
              <img src={job.logo} alt={`Logo for ${job?.companyName}`} />
            </div>
            <div className="card-text">
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
                <Link to={"/editeJob"}>
                  <button onClick={() => setEdit(job)}>Edit Job</button>
                </Link>
                <button onClick={() => handleFavorite(job?.id)}>
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Jobs;
