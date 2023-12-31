import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>

            return <div>{error.message}</div>;

        </div>
    )
}

export default Error