import axios from "axios";
import { useState } from "react"

const JobAdd = () => {
    const [input, setInput] = useState({
        title: "",
        logo: "",
        companyName: "",
        position: "",
        description: "",
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(input);
        // axios.post("http://localhost:9000/jobs", input)
        //     .then((res) => console.log(res))
        //     .catch((error) => console.log(error))
    }
    return (
        <div><div className="signup-container">
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="imageURL">Job
                    logo:(Image URL)</label>
                <input
                    type="text"
                    name="logo"
                    value={input.logo}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="companyName">CompanyName:</label>
                <input
                    type="text"
                    name="companyName"
                    value={input.companyName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="position">Position:</label>
                <input
                    type="text"
                    name="position"
                    value={input.position}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default JobAdd