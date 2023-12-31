import { useContext } from "react"
import { context } from "../../context/Global/GlobalContext"
import { Link, useLoaderData } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6"

const Favoract = () => {
    const { favoract } = useContext(context)
    const { data } = useLoaderData()
    const filterData = data?.filter(job => favoract.includes(job.id))

    return (
        <div>{filterData.length > 0 ?
            filterData?.map(data => (
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
                        </div>
                    </div>
                </div>
            ))
            : <h1>no Favoract Job Add</h1>}
        </div>
    )
}

export default Favoract