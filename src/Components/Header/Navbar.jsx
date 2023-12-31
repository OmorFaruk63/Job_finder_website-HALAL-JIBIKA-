import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Navbar.css"
import { auth } from "../../Firebase/Firebase";
import { useSignOut } from 'react-firebase-hooks/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    //Sing out Function
    function handleSingout() {
        signOut()
    }

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
                    {user ? <NavLink onClick={handleSingout} to="/singup">Sign Out</NavLink> : <>
                        <NavLink to="/singup">Signup</NavLink>
                        <NavLink to="/SingIn">Sing In</NavLink>
                    </>}
                </div>
                <div className="navbar-img">
                    <img width={"30px"} src={user ? user?.photoURL :
                        "https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg"} />
                    <span>{loading ? "Loading" : user ? user?.displayName : "profile Name"}</span>
                </div>
                <div className="bar"><FaBars /></div>
            </nav>
        </div>
    )
}

export default Navbar