import axios from "axios";
import { useState, useEffect } from "react";
import NetworkErrorPage from "../Pages/NetworkError/NetworkError";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 200);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
