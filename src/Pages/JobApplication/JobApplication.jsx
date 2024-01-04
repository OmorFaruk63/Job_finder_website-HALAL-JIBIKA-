import { useForm } from "react-hook-form";
import "./JobApplication.css";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const JobApplication = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const status = state.isApplied === "undefined" ? false : !state.isApplied;
    axios
      .put(`http://localhost:9000/jobs/${state.id}`, {
        ...state,
        isApplied: status,
      })
      .then((res) => {
        toast.success(`Application Submited in ${state?.companyName}`);
        console.log(res.message);
      })
      .catch((error) => toast.error(error.message));
    navigate("/jobs");
  };

  return (
    <div className="job-application-container">
      <h1 className="form-title">Job Application Form</h1>
      <h4 className="job-application-companyName">
        {state.companyName} <img width={"30px"} src={state.logo} />
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="job-application-form">
        <label htmlFor="fullName" className="form-label">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName", { required: "Full Name is required" })}
          className={`form-input ${errors.fullName ? "error-input" : ""}`}
        />
        {errors.fullName && (
          <span className="error-message">{errors.fullName.message}</span>
        )}

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          className={`form-input ${errors.email ? "error-input" : ""}`}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}

        <label htmlFor="resume" className="form-label">
          Resume (PDF):
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          {...register("resume", { required: "Resume is required" })}
          className={`form-input ${errors.resume ? "error-input" : ""}`}
        />
        {errors.resume && (
          <span className="error-message">{errors.resume.message}</span>
        )}

        <label htmlFor="coverLetter" className="form-label">
          Cover Letter:
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows="4"
          {...register("coverLetter", { required: "Cover Letter is required" })}
          className={`form-input ${errors.coverLetter ? "error-input" : ""}`}
        ></textarea>
        {errors.coverLetter && (
          <span className="error-message">{errors.coverLetter.message}</span>
        )}

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
