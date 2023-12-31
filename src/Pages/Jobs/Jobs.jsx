import "./Jobs.css"
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
const Jobs = () => {
    const jobs = useLoaderData()
    const [data, setData] = useState(jobs?.data)

    return (
        <div>
            {
                data.map(data => (
                    <div key={data?.id} className="job-card">
                        <div className="card-img">
                            <img src={data.logo} />
                        </div>
                        <div className="card-contant">
                            <h2>Job Title: {data?.title}</h2>
                            <h4>CompanyName: {data?.companyName}</h4>
                            <p>Position: {data?.position}</p>
                            <p>Description: {data?.description}</p>
                            <p><FaLocationDot /> Work from anywhere.</p>
                            <Link to={`/jobs/${data?.id}`}><button>View Job </button></Link>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Jobs