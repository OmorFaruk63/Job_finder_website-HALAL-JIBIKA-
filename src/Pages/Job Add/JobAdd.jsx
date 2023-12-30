
const JobAdd = () => {
    function handleSubmit() {

    }
    return (
        <div><div className="signup-container">
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Job Title:</label>
                <input
                    type="text"
                    name="username"
                    // value={formData.username}
                    // onChange={handleChange}
                    required
                />
                <label htmlFor="username">Job
                    logo:</label>
                <input
                    type="text"
                    name="username"
                    // value={formData.username}
                    // onChange={handleChange}
                    required
                />
                <label htmlFor="username">CompanyName:</label>
                <input
                    type="text"
                    name="username"
                    // value={formData.username}
                    // onChange={handleChange}
                    required
                />

                <label htmlFor="email">Position:</label>
                <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                />

                <label htmlFor="password">Description:</label>
                <input
                    type="text"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default JobAdd