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
        <h1>
          This is admin page, you don't need to understand the message of this
          page, go back
        </h1>
        <h2>Error: {error && error.message} </h2>
        <button onClick={() => navigate(-1)}> Go Back</button>
      </div>
    </div>
  );
};

export default Error;
