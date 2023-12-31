import { Link, useLoaderData, useNavigate } from "react-router-dom"
import "./Home.css"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../Firebase/Firebase"
import { toast } from 'react-toastify';
const Home = () => {

    const jobs = useLoaderData()
    const [data, setData] = useState(jobs?.data)

    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    function handleNavigate() {

        if (user) {
            navigate('/jobs')
        } else {
            navigate('/singup')
            toast("Please sign up first.")
        }
    }

    return (
        <><div className="home-container">

            <div className="contant">
                <header>
                    <h1>Find Your Dream <span className="home-job">Job</span>  Today!</h1>
                </header>
                <div className="home-btn-contant">

                    <button onClick={handleNavigate} className="home-btn">
                        Explore Now!
                    </button>

                    <Link to={"/JobAdd"}>
                        <button className="home-btn">Hiring Employee</button>
                    </Link>
                </div>

            </div>
            <div className="hero-img">
                <img width={"500px"} src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg" />
            </div>
        </div>
            <section className="home-job-card-container">
                {
                    data.slice(5).map(data => (
                        <div key={data?.id} className="home-job-card">
                            <div className="home-card-img">
                                <img width={"150px"} src={data.logo} />
                            </div>
                            <div className="home-card-contant">
                                <h2>{data?.title}</h2>
                                <hp>CompanyName: {data?.companyName}</hp>
                                <p>Position: {data?.position}</p>
                                <p><FaLocationDot /> Work from anywhere.</p>
                                <Link to={`/jobs/${data?.id}`}><button>View Job </button></Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>

    )
}

export default Home