import { Link } from "react-router-dom"
import "./SingUp.css"

const Singup = () => {
    function handleSubmit() {

    }
    return (
        <div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        // value={formData.username}
                        // onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Confirm Password:</label>
                    <input
                        type="password"
                        name="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>
                <span className="switch-btn">If you All ready Have Account <Link to={"/singin"}>click </Link> </span>
            </div>
        </div>
    )
}

export default Singup