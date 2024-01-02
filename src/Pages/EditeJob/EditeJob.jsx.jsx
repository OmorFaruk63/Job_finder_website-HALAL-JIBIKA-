import axios from "axios";
import { useContext, useEffect } from "react";
import { context } from "../../context/Global/GlobalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./EditeJob.css";
const EditeJob = () => {
  const { edit } = useContext(context);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Added setValue from react-hook-form
  } = useForm();
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  // Assuming you have the previous data available in a variable named 'previousData'
  const previousData = {
    title: edit.title,
    logo: edit.logo,
    companyName: edit.companyName,
    position: edit.position,
    description: edit.description,
  };

  // Set default values when the component mounts
  useEffect(() => {
    for (const key in previousData) {
      if (previousData.hasOwnProperty(key)) {
        setValue(key, previousData[key]);
      }
    }
  }, [edit]);

  const onSubmit = (data) => {
    axios
      .put(`http://localhost:9000/jobs/${edit.id}`, data)
      .then((res) => {
        toast.success("Edite Successful");
        navigate(-1);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="edit-job-container">
        <h2>Edite Job</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />

          <input
            type="text"
            placeholder="logo"
            {...register("logo", { required: true, pattern: urlRegex })}
          />

          <input
            type="text"
            placeholder="companyName"
            {...register("companyName", { required: true })}
          />

          <input
            type="text"
            placeholder="position"
            {...register("position", { required: true })}
          />

          <input
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default EditeJob;
