import { Link, useNavigate } from "react-router-dom";
import "./SingIn.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const SingIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //google Auth
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  //Github Auth
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  if (signInError) {
    toast.error("Invalid email or password", { toastId: "omor" });
  }

  if (signInUser) {
    toast.success("Sing up successfull", { toastId: "omor" });
  }

  if (signInLoading) {
    return <Loading />;
  }

  function handleGoogle() {
    signInWithGoogle();
  }

  function handleGithub() {
    signInWithGithub();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (email || password !== "") {
      await signInWithEmailAndPassword(email, password);
    } else {
      toast.error("Input field required");
    }
  }
  if (signInUser) {
    return navigate("/");
  }
  return (
    <div>
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <span className="switch-btn">
          Register a New Account <Link to={"/signup"}>click </Link>{" "}
        </span>

        <button onClick={handleGoogle} className="google-btn">
          <FaGoogle className="google-btn-icon" /> Sing Up With google
        </button>
        <br />
        <button onClick={handleGithub} className="google-btn">
          <FaGithub className="github-btn-icon" />
          Sing Up With github
        </button>
      </div>
    </div>
  );
};

export default SingIn;
