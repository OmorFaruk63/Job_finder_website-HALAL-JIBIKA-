import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home/Home";
import Singup from "../Pages/SingUp/Singup";
import SingIn from "../Pages/SingIn/SingIn";
import Favorite from "../Pages/Favorite/Favorite";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";
import Error from "../Pages/Error/Error";
import JobAdd from "../Pages/Job Add/JobAdd";
import axios from "axios";



export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    loader: async () => await axios.get("http://localhost:9000/jobs")
                },
                {
                    path: "/jobs",
                    element: <Jobs />,
                    loader: async () => await axios.get("http://localhost:9000/jobs")
                },
                {
                    path: "/jobAdd",
                    element: <JobAdd />
                },
                {
                    path: "/singup",
                    element: <Singup />
                },
                {
                    path: "SingIn",
                    element: <SingIn />
                },
                {
                    path: "/favorite",
                    element: <Favorite />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/about",
                    element: <About />
                },
            ],
        },
    ])