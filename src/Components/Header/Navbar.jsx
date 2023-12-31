import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Navbar.css"
import { auth } from "../../Firebase/Firebase";
import { useSignOut } from 'react-firebase-hooks/auth';
import { useState } from "react";
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const [isTrue, setTrue] = useState(false);

    //Sing out Function
    function handleSingout() {
        signOut()
    }

    return (
        <div>
            <nav className="navbar">
                <img className="main-logo" width="50px" src="../../../public/logo-Main.jpg" />
                <ul onClick={() => setTrue(!isTrue)} className={isTrue ? "nav-manu-active nav-manu" : "nav-manu"}>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/jobs"> <li>Jobs</li></NavLink>
                    <NavLink to="/about">  <li>About</li></NavLink>
                    <NavLink to="/contact"> <li>Contact</li></NavLink>
                    <NavLink to="/favorite"> <li>Favorite</li></NavLink>
                    {user ? <NavLink onClick={handleSingout} to="/singup">Sign Out</NavLink> : <>
                        <NavLink to="/singup"> <li> Signup</li></NavLink>
                        <NavLink to="/SingIn"> <li>Sing In</li></NavLink>
                    </>}
                </ul>
                <div className="navbar-img">
                    <img width={"30px"} src={user ? user?.photoURL :
                        "https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg"} />
                    <span>{loading ? "Loading" : user ? user?.displayName : "profile Name"}</span>
                </div>
                <div onClick={() => setTrue(!isTrue)} className="bar">
                    {isTrue ? "❌" : <FaBars />}
                </div>
            </nav>
        </div>
    )
}

export default Navbar