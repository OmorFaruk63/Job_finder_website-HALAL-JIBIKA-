import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <div className="contant">
                <header>
                    <h1>Find Your Dream Job Today!</h1>
                    <Link to={"/jobs"}>
                        <button className="home-btn">
                            Search for jobs now! </button>
                    </Link>

                    <Link to={"/JobAdd"}>
                        <button className="home-btn">Hiring Employee</button>
                    </Link>
                </header>
                <section>
                    <p>Welcome to Halal Jibika, your one-stop shop for finding your dream job. We believe everyone deserves a career they love, and we're here to help you make it happen.</p>
                    <p>
                        A diverse group of people in all different work settings are smiling and looking confident. They should represent the variety of jobs your website features
                    </p>
                    <h2>Why Choose Us?</h2>
                    <p>We're the fastest-growing job board: More and more companies are posting their jobs with us every day.
                        We're committed to diversity and inclusion: We believe everyone deserves an equal opportunity to find a great job.
                        We're passionate about helping people: We're here to support you every step of the way in your job search.
                        Ready to get started?</p>
                </section>
            </div>
            <div className="hero-img">
                <img width={"500px"} src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg" />
            </div>
        </div>
    )
}

export default Home