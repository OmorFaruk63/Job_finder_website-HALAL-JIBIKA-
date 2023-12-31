import { useNavigate, useRouteError } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <div>
            <Navbar />
            return <div>{error.message}</div>;
            <button onClick={() => navigate(-1)}>  Go Back</button>
        </div>
    )
}

export default Error