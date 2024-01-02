// Importing necessary dependencies and styles
import { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Jobs.css";
import useFetch from "../../Hook/useFetch";
import Loading from "../../Components/Loading/Loading";
import { context } from "../../context/Global/GlobalContext";
import { FaHeart } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
// Functional component definition
const Jobs = () => {
  // Destructuring values from the context and state
  const { setEdit } = useContext(context);

  // Destructuring values from the context and state
  const [user, authLoading] = useAuthState(auth);

  // Geting user authentication status
  const navigate = useNavigate();

  const { data, loading, error } = useFetch("http://localhost:9000/jobs");
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  // Handling job deletion
  async function handleDeleteJob(id) {
    console.log(id);
    await axios
      .delete(`http://localhost:9000/jobs/${id}`)
      .then((res) => console.log("Delete Successful"))
      .catch((err) => toast.error(err.message));
    setCurrentData(currentData.filter((data) => data.id !== id));
  }

  // Handling job favoract
  function handleFavorite(job) {
    const status = job.istrue === "undefined" ? false : !job.istrue;
    axios
      .put(`http://localhost:9000/jobs/${job.id}`, {
        ...job,
        istrue: status,
      })
      .then((res) => {
        job.istrue !== true && toast.success("Add to favorite successful.");
        job.istrue === true && toast.warn("Remove favorite");
      })
      .catch((error) => toast.error(error.message));
    setCurrentData(
      currentData.map((data) => {
        if (data.id === job.id) {
          return {
            ...data,
            istrue: status,
          };
        }
        return data;
      })
    );
  }

  if (authLoading) {
    return <Loading />;
  }

  if (!user) {
    return navigate("/signup");
  }

  return (
    <div className="job-components">
      {loading ? (
        <h1>
          <Loading />
        </h1>
      ) : (
        currentData?.map((job) => (
          <div key={job?.id} className="job-card">
            <div className="card-img">
              <img src={job?.logo} alt={`Logo for ${job?.companyName}`} />
            </div>
            <div className="card-text">
              <h2>{job?.companyName}</h2>
              <h4>Job Title: {job?.title}</h4>
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
                <button
                  className={job?.istrue && "heart"}
                  onClick={() => handleFavorite(job)}
                >
                  <FaHeart />
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
