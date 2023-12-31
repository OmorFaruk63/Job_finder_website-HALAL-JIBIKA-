import { Link } from "react-router-dom";
import "./SingIn.css"
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase";
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
const SingIn = () => {

    //google Auth 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    function handleGoogle() {
        signInWithGoogle()
    }

    //Github Auth 
    const [signInWithGithub, GithubUser, GithubLoading, GithubError] = useSignInWithGithub(auth);

    function handleGithub() {
        signInWithGithub()
    }
    console.log(GithubUser, GithubError?.message);
    function handleSubmit() {

    }
    return (
        <div>
            <div className="signin-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                <span className="switch-btn">Register a New Account  <Link to={"/singup"}>click </Link> </span>
                <hr />
                <button onClick={handleGoogle} className="google-btn"><FaGoogle className="google-btn-icon" /> Sing Up With google</button>
                <br />
                <button onClick={handleGithub} className="google-btn"><FaGithub className="github-btn-icon" />Sing Up With github</button>
            </div>
        </div>
    )
}

export default SingIn;