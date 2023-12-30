import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img className="main-logo" width="50px" src="../../../public/logo-Main.jpg" />
                <div className="nav-manu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
                    <NavLink to="/singup">Signup</NavLink>
                    <NavLink to="/SingIn">Sing In</NavLink>
                </div>

                <div className="bar"><FaBars /></div>
            </nav>
        </div>
    )
}

export default Navbar