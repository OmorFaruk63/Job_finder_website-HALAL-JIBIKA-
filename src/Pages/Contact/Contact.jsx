import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
    toast.success("Thank you for contacting us");
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
              type="email"
              placeholder="Your Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              rows="4"
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
