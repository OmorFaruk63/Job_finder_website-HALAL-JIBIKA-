import { useForm } from "react-hook-form";
import "./JobApplication.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const JobApplication = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Job Application Submited");
    navigate(-1);
  };

  return (
    <div className="job-application-container">
      <h1 className="form-title">Job Application Form</h1>
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
