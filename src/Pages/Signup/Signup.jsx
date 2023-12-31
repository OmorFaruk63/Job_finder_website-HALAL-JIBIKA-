import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");

  const [updateProfile] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  async function handleSubmit(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    setComfirmPassword("");
    setPassword("");
    setEmail("");
  }
  return (
    <div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.length === "" && (
            <span className="input-field">Please enter your name.</span>
          )}
          <label htmlFor="email">Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Confirm Password:</label>
          <input
            value={comfirmPassword}
            onChange={(e) => setComfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <span className="switch-btn">
          If you All ready Have Account <Link to={"/singin"}>click </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Singup;
