import { Navigate, useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      {/* You can use your custom 404 image as a background */}
      <div className="background-image"></div>
      <div className="not-found-content">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for might be in another castle.</p>
        <button onClick={() => navigate(-1)}>back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
