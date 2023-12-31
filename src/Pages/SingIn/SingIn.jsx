import { Link, useNavigate } from "react-router-dom";
import "./SingIn.css"
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase";
import { useSignInWithGoogle, useSignInWithGithub, useAuthState } from
    'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";
const SingIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword, load, error
    ] = useSignInWithEmailAndPassword(auth);

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

    async function handleSubmit(e) {
        e.preventDefault()
        await signInWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate()

    const [user] = useAuthState(auth);
    console.log(error?.message);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])


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
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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