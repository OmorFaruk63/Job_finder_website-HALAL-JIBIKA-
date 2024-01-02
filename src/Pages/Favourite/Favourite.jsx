import "./Favourite.css";
import { Link } from "react-router-dom";
import { FaHeart, FaLocationDot } from "react-icons/fa6";
import useFetch from "../../Hook/useFetch";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Favourite = () => {
  const { data, loading, error } = useFetch("http://localhost:9000/jobs");

  const [currentData, setCurrentData] = useState(data);

  const filterData = data.filter((d) => d.istrue === true);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  // Handling job favoract
  function handleFavoriteDataRemove(job) {
    axios
      .put(`http://localhost:9000/jobs/${job.id}`, {
        ...job,
        istrue: false,
      })
      .then((res) => {
        toast.warning("Removed from favorites successfully.");

        setCurrentData(currentData.filter((d) => d.id !== job.id));
      })
      .catch((error) => toast.error(error.message));
  }

  if (filterData.length < 1) {
    return loading ? (
      <h1>
        <Loading />
      </h1>
    ) : (
      <h1 className="no-fav-add">No favorite job add. </h1>
    );
  }
  return (
    <div className="fav">
      {loading ? (
        <Loading />
      ) : (
        currentData?.map(
          (data) =>
            data.istrue === true && (
              <div key={data?.id} className="job-card">
                <div className="card-img">
                  <img src={data.logo} />
                </div>
                <div className="fav-card-contant">
                  <h2>{data?.companyName}</h2>
                  <h4> {data?.title}</h4>
                  <p>Position: {data?.position}</p>
                  <p>Description: {data?.description}</p>
                  <p>
                    <FaLocationDot /> Work from anywhere.
                  </p>
                  <div className="fav-card-btn">
                    <Link to={`/jobs/${data?.id}`}>View Job</Link>
                    <button
                      className={data?.istrue && "heart"}
                      onClick={() => handleFavoriteDataRemove(data)}
                    >
                      <FaHeart /> .
                    </button>
                    Remove from Favorite
                  </div>
                </div>
              </div>
            )
        )
      )}
    </div>
  );
};

export default Favourite;
