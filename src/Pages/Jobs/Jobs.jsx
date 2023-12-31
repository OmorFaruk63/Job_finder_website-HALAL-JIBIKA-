import "./Jobs.css"
import { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { context } from "../../context/Global/GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
const Jobs = () => {
    const jobs = useLoaderData()
    const { setEdit } = useContext(context)
    const [data, setData] = useState(jobs?.data)
    const [count, setCount] = useState(jobs?.data)
    const { handleFavorite } = useContext(context)
    function handleDeleteJob(id) {
        axios.delete(`http://localhost:9000/jobs/${id}`)
            .then((res) => toast.success("Delete Successfull"))
            .catch((err) => console.log(err))
        setCount(count + 1)
    }

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
                            <div className="card-btn">
                                <Link to={`/jobs/${data?.id}`}><button>View Job </button></Link>
                                <button onClick={() => handleDeleteJob(data?.id)}>Delete Job</button>
                                <Link to={"/editeJob"}>
                                    <button onClick={() => setEdit(data)}>Edite Job</button>
                                </Link>

                                <button onClick={() => handleFavorite(data?.id)}>  Add to favorite</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Jobs