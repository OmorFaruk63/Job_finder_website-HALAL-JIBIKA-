import "./Jobs.css"
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
const Jobs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/jobs")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
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
                            <button>View Job</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Jobs