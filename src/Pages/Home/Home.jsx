import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
    return (
        <div>
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
                <h2>What We Offer</h2>
                <p>
                    A massive job board: Search through thousands of openings from across all industries and locations.
                    Personalized job recommendations: Tell us about your skills and interests, and we'll show you jobs that are a perfect fit.
                    Easy application process: Apply to jobs with just a few clicks. No more sending out endless resumes!
                    Employer reviews: Read honest reviews from employees to get the inside scoop on companies before you apply.
                    Career advice: Get expert tips on everything from writing your resume to acing your interview.
                </p>
                <h2>Why Choose Us?</h2>
                <p>We're the fastest-growing job board: More and more companies are posting their jobs with us every day.
                    We're committed to diversity and inclusion: We believe everyone deserves an equal opportunity to find a great job.
                    We're passionate about helping people: We're here to support you every step of the way in your job search.
                    Ready to get started?</p>
            </section>
        </div>
    )
}

export default Home