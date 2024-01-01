import { useNavigate, useRouteError } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import "./Error.css";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="error">
        <h1>{error.message}</h1>
        <button onClick={() => navigate(-1)}> Go Back</button>
      </div>
    </div>
  );
};

export default Error;
