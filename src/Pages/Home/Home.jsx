// Importing necessary dependencies and styles
import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import "./Home.css";
import { context } from "../../context/Global/GlobalContext";
import useFetch from "../../Hook/useFetch";

const Home = () => {
  const { user } = useContext(context);

  // Navigation setup
  const navigate = useNavigate();

  const { data, loading, error } = useFetch("http://localhost:9000/jobs");

  const [currentData, setCurrentData] = useState(data);

  // Function to handle navigation and show a toast if not signed up
  function handleNavigate() {
    if (user) {
      navigate("/jobs");
    } else {
      navigate("/signup");
      toast("Please sign up first.");
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
            <Link to={"/JobAdd"}>
              <button onClick={handleNavigate} className="home-btn">
                Hiring Employee
              </button>
            </Link>
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
      <section className="home-job-card-container">
        {data.slice(0, 5).map((job) => (
          <div key={job?.id} className="home-job-card">
            <div className="home-card-img">
              <img
                width={"150px"}
                src={job.logo}
                alt={`Logo for ${job?.companyName}`}
              />
            </div>
            <div className="home-card-content">
              <h2>{job?.title}</h2>
              <hp>CompanyName: {job?.companyName}</hp>
              <p>Position: {job?.position}</p>
              <p>
                <FaLocationDot /> Work from anywhere.
              </p>
              {/* Link to individual job page */}
              <Link to={`/jobs/${job?.id}`}>
                <button>View Job </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
