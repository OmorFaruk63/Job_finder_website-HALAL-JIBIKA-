import { Link } from "react-router-dom";
import "./SingIn.css"
const SingIn = () => {
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
            </div>
        </div>
    )
}

export default SingIn;