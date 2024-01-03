import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "./JobAdd.css";
const JobAdd = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/jobs", data)
      .then((res) => {
        toast.success("Job add successful.");
        navigate("/jobs");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="add-job-body">
        <h2>Add Job</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>Title required</span>}
          <input
            type="text"
            placeholder="logo"
            {...register("logo", { required: true, pattern: urlRegex })}
          />
          {errors.logo && <span>logo required</span>}
          <input
            type="text"
            placeholder="companyName"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>Company Name required</span>}
          <input
            type="text"
            placeholder="position"
            {...register("position", { required: true })}
          />
          {errors.position && <span>Position required</span>}
          <input
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>description required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default JobAdd;
