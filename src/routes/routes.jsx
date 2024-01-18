import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import axios from "axios";
import Jobs from "../Pages/Jobs/Jobs";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Signup from "../Pages/Signup/Signup";
import SingIn from "../Pages/SingIn/SingIn";
import JobAdd from "../Pages/Job Add/JobAdd";
import Contact from "../Pages/Contact/Contact";
import Favourite from "../Pages/Favourite/Favourite";
import JobsDetails from "../Pages/Jobs/JobsDetails";
import EditeJob from "../Pages/EditeJob/EditeJob.jsx";
import JobApplication from "../Pages/JobApplication/JobApplication.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobsDetails />,
        loader: async ({ params }) =>
          await axios.get(
            `https://omor-service.onrender.com/jobs/${params.id}`
          ),
      },
      {
        path: "/jobAdd",
        element: <JobAdd />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/editeJob",
        element: <EditeJob />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "singin",
        element: <SingIn />,
      },
      {
        path: "jobapplication",
        element: <JobApplication />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
