// Importing necessary dependencies and styles
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import "./Home.css";
import useFetch from "../../Hook/useFetch";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
import NetworkErrorPage from "../NetworkError/NetworkError";

const Home = () => {
  const [user] = useAuthState(auth);

  // Navigation setup
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    "https://omor-service.onrender.com/jobs"
  );

  if (error) {
    return <NetworkErrorPage />;
  }

  // Function to handle navigation and show a toast if not signed up
  function handleNavigate() {
    if (user) {
      navigate("/jobs");
    } else {
      navigate("/signup");
      toast("Please sign up first.");
    }
  }
  function handleJobAdd() {
    if (user) {
      navigate("/JobAdd");
    } else {
      toast("Please sign up first.");
      navigate("/signup");
    }
  }

  // Rendering the Home component
  return (
    <>
      {/* Home Container */}
      <div className="home-container">
        {/* Content */}
        <div className="content">
          <header>
            <h1>
              Find Your Dream <span className="home-job">Job</span> Today!
            </h1>
          </header>
          {/* Home buttons */}
          <div className="hero-btn">
            <button onClick={handleNavigate} className="home-btn">
              Explore Now!
            </button>
            {/* Link to JobAdd page */}
            <button onClick={handleJobAdd} className="home-btn">
              Post a JOB
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="hero-img">
          <img
            width={"500px"}
            src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg"
            alt="Job Search"
          />
        </div>
      </div>
      {/* Home Job Card Container */}
      <h1 className="Latest-Jobs"> Latest Jobs</h1>
      <section className="home-job-card-container">
        {data.slice(0, 5).map((job) => (
          <div key={job?.id} className="home-job-card">
            <div className="home-card-img">
              <img
                width={"150px"}
                height={"150px"}
                src={job.logo}
                alt={`Logo for ${job?.companyName}`}
              />
            </div>
            <div className="home-card-content">
              <h2> {job?.companyName}</h2>
              <p>{job?.title}</p>
              <p>Position: {job?.position}</p>
              <p>
                <FaLocationDot /> Work from anywhere.
              </p>
              {/* Link to individual job page */}

              {!user ? (
                <Link to={`/singin`}>View </Link>
              ) : (
                <Link to={`/jobs/${job?.id}`}>View Job </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
