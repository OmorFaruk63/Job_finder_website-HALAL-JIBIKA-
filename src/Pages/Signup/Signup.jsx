import "./Signup.css";
import {
  useAuthState,
  useUpdateProfile,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { auth } from "../../Firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";

const Signup = () => {
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, load, err] =
    useCreateUserWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);
  const [isTrue, setisTrue] = useState(false);

  if (load || loading) {
    <Loading />;
  }
  console.log(err?.message);
  const navigate = useNavigate();
  // Redirecting based on user authentication status
  if (user) {
    navigate(-1);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.ConfirmPassword === data.Password) {
      await createUserWithEmailAndPassword(data.Email, data.Password)
        .then((res) => console.log("ok"))
        .catch((err) => console.log(err.message));
      await updateProfile({ displayName: data.Username });
    } else {
      toast.error("Password dosn't match");
    }
  };

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="Sign Up">Sign Up</h1>
          <input
            type="text"
            placeholder="Username"
            {...register("Username", { required: true })}
          />
          {errors.Username ? <span> Username required</span> : ""}
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email ? <span> Email required</span> : ""}
          <input
            type="text"
            placeholder="Password"
            {...register("Password", { required: true })}
          />
          {errors.Password ? <span> Password required</span> : ""}
          <span className="ConfirmPassword">
            {" "}
            <input
              type={isTrue ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("ConfirmPassword", { required: true })}
            />
            <span onClick={() => setisTrue(!isTrue)} className="emoji">
              {" "}
              {isTrue ? "🙂" : "😣"}
            </span>
          </span>

          {errors.ConfirmPassword ? <span>Confirm Password required</span> : ""}
          <input type="submit" />

          <span style={{ color: "black" }}>
            Register a New Account{" "}
            <Link style={{ color: "#007bffff" }} to={"/SingIn"}>
              <strong> click </strong>
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
