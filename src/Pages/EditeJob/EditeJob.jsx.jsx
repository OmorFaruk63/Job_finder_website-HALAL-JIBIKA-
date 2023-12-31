import axios from "axios";
import { useContext, useState } from "react"
import { context } from "../../context/Global/GlobalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditeJob = () => {
    const { edit } = useContext(context)
    const navigate = useNavigate()
    const [input, setInput] = useState({
        title: edit.title,
        logo: edit.logo,
        companyName: edit.companyName,
        position: edit.position,
        description: edit.description,
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
        axios.put(`http://localhost:9000/jobs/${edit.id}`, input)
            .then((res) => {
                toast.success("Edite Successful")
                navigate(-1)
            })
            .catch((error) => toast.error(error.message))
    }
    return (
        <div><div className="signup-container">
            <h2>Edite Job</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Edite Job Title:</label>
                <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="imageURL">Edite Job
                    logo:(Image URL)</label>
                <input
                    type="text"
                    name="logo"
                    value={input.logo}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="companyName">Edite CompanyName:</label>
                <input
                    type="text"
                    name="companyName"
                    value={input.companyName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="position">Edite Position:</label>
                <input
                    type="text"
                    name="position"
                    value={input.position}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Edite Description:</label>
                <input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Edite Details</button>
            </form>
        </div>
        </div>
    )
}

export default EditeJob;