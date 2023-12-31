import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home/Home";
import Singup from "../Pages/SingUp/Singup";
import SingIn from "../Pages/SingIn/SingIn";
import Favorite from "../Pages/Favoract/Favoract";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";
import Error from "../Pages/Error/Error";
import JobAdd from "../Pages/Job Add/JobAdd";
import axios from "axios";
import JobsDetails from "../Pages/Jobs/JobsDetails";
import EditeJob from "../Pages/EditeJob/EditeJob.jsx";



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
                    path: "/jobs/:id",
                    element: <JobsDetails />,
                    loader: async ({ params }) => await axios.get(`http://localhost:9000/jobs/${params.id}`)
                },
                {
                    path: "/jobAdd",
                    element: <JobAdd />
                },
                {
                    path: "/editeJob",
                    element: <EditeJob />
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
                    element: <Favorite />,
                    loader: async () => await axios.get("http://localhost:9000/jobs")
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