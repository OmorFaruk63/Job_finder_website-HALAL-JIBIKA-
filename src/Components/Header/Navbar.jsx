import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { auth } from "../../Firebase/Firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { useContext, useState } from "react";
import { context } from "../../context/Global/GlobalContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, loading } = useContext(context);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  const [isTrue, setTrue] = useState(false);

  //Sing out Function
  function handleSingout() {
    signOut();
    navigate("/");
    toast.success("Sign out successfull.");
  }

  return (
    <div>
      <nav className="navbar">
        <div>
          <img
            className="main-logo"
            width="50px"
            src="https://shorturl.at/lCEX9"
          />
        </div>

        <ul
          onClick={() => setTrue(!isTrue)}
          className={isTrue ? "nav-manu-active nav-manu" : "nav-manu"}
        >
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to={"/jobs"}>
            <li>Jobs</li>
          </NavLink>

          <NavLink to="/about">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>

          <NavLink to="/favourite">
            <li>Favourite</li>
          </NavLink>

          {user ? (
            <Link onClick={handleSingout}>Sign Out</Link>
          ) : (
            <>
              <NavLink to="/signup">
                {" "}
                <li> Sign up</li>
              </NavLink>
              <NavLink to="/singin">
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
          <div onClick={() => setTrue(!isTrue)} className="bar">
            {isTrue ? "❌" : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
