import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./JobsDetails.css";
import { useState } from "react";
import axios from "axios";
const JobsDetails = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const status = data.isApplied === "undefined" ? false : data.isApplied;

  const [currentData, setCurrentData] = useState({
    ...data,
    isApplied: status,
  });

  function handleApply(job) {
    axios
      .put(`http://localhost:9000/jobs/${job.id}`, {
        ...job,
        isApplied: false,
      })
      .then((res) => console.log())
      .catch((err) => console.log());
    setCurrentData((prev) => {
      return { ...prev, isApplied: false };
    });
  }

  return (
    <div className="JobsDetails-card">
      <div className="JobsDetails-img">
        <img src={currentData?.logo} />
        <div>
          <h2>{currentData?.title}</h2>
          <h4>CompanyName: {currentData?.companyName}</h4>
        </div>
      </div>
      <div className="JobsDetails-contant1">
        <div>
          <p>Application Deadline: 25 Jan 2024</p>
          <p>Age: 28 to 35 years</p>
          <p>Experience: 2 to 5 year(s)</p>
        </div>
        <div>
          {" "}
          <p>Location: Dhaka</p> <p>Published on: 27 Dec 2023</p>{" "}
        </div>
      </div>
      <hr />
      <div className="JobsDetails-contant2">
        <h2>Job Responsibilities & Context</h2>

        <p>
          The company is seeking highly skilled Front-End Developers to join our
          dynamic team. The position requires a wealth of experience and
          expertise in a variety of key areas, including React JS, Javascript,
          UI testing, front-end architecture, Redux/Flux, Material UI, Figma
          design, HTML, CSS, C#, .NET Core Web API, SQL Server, and enterprise
          application development. Furthermore, to manage the project utilizing
          GIT, Azure DevOps, agile methodologies, and daily scrum to ensure
          seamless collaboration with a large team. Front-end development using
          ReactJS, Type-Script, Material UI, JavaScript, HTML, CSS Development
          experience in component testing using jest. Design and implement
          scalable front-end architecture for enterprise applications, utilizing
          Redux/Flux for efficient state management. Incorporate Material UI to
          create cohesive, visually appealing user interfaces. Collaborate
          closely with design teams, converting Figma design into UI. Implement
          business logic using C# and .NET Core Web API for seamless back-end
          interactions. Working with SQL Server, function, view, and store
          procedure. working with GIT, Azure DevOps, and agile methodologies,
          Scrum fostering a collaborative and efficient development process.
          Will be working with Bangladesh & abroad teams
        </p>
      </div>
      <hr />
      <div className="JobsDetails-contant2">
        <h2>Additional Requirements</h2>

        <p>
          Age 28 to 35 years Working experience in functions, Store Procedure
          SQL Server. Experience with GIT, Azure DevOps, and agile
          methodologies, including scrum. Familiarity with VB.net in enhancing,
          maintaining enterprise applications. Strong problem-solving and
          communication skills. Experience in C# and .NET Core Web API for
          seamless back-end integrations. Experience with Figma design for
          converting figma design to material UI component
        </p>
      </div>
      <hr />
      <h2>Email your CV</h2>
      <p>contact@finsource.net</p>
      <div className="JobsDetails-btn">
        {currentData.isApplied ? (
          <button onClick={() => handleApply(currentData)}>Apply Cancel</button>
        ) : (
          <Link to={`/jobapplication`} state={currentData}>
            <button> Applay Now </button>
          </Link>
        )}
        <button onClick={() => navigate(-1)}> go back</button>
      </div>
    </div>
  );
};

export default JobsDetails;
