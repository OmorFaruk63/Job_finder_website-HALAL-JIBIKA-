import { Link, useNavigate } from "react-router-dom";
import "./SingIn.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useContext, useState } from "react";
import { context } from "../../context/Global/GlobalContext";
import { toast } from "react-toastify";

const SingIn = () => {
  const navigate = useNavigate();
  const { user } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  //google Auth
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  function handleGoogle() {
    signInWithGoogle();
  }

  //Github Auth
  const [signInWithGithub] = useSignInWithGithub(auth);

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

  console.log("SingIn");

  if (user) {
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
        <hr />
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
