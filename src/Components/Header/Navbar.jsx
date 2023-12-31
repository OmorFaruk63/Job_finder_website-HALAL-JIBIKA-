import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";
import { auth } from "../../Firebase/Firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const [isTrue, setTrue] = useState(false);
  useEffect(() => {}, [user]);
  console.log(user);
  //Sing out Function
  function handleSingout() {
    signOut();
  }

  function handleNavigate() {
    if (user) {
      navigate("/jobs");
    } else {
      navigate("/signup");
      toast("Please sign up first.");
    }
  }

  return (
    <div>
      <nav className="navbar">
        <img
          className="main-logo"
          width="50px"
          src="../../../public/logo-Main.jpg"
        />
        <ul
          onClick={() => setTrue(!isTrue)}
          className={isTrue ? "nav-manu-active nav-manu" : "nav-manu"}
        >
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink onClick={handleNavigate} to="/jobs">
            {" "}
            <li>Jobs</li>
          </NavLink>

          <NavLink to="/about">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <li>Contact</li>
          </NavLink>
          <NavLink to="/favorite">
            {" "}
            <li>Favorite</li>
          </NavLink>
          {user ? (
            <NavLink onClick={handleSingout} to="/singup">
              Sign Out
            </NavLink>
          ) : (
            <>
              <NavLink to="/singup">
                {" "}
                <li> Signup</li>
              </NavLink>
              <NavLink to="/SingIn">
                {" "}
                <li>Sing In</li>
              </NavLink>
            </>
          )}
        </ul>
        <div className="navbar-img">
          <img
            width={"30px"}
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg"
            }
          />
          <span>
            {loading ? "Loading" : user ? user?.displayName : "profile Name"}
          </span>
        </div>
        <div onClick={() => setTrue(!isTrue)} className="bar">
          {isTrue ? "❌" : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
