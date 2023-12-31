import { Outlet } from "react-router-dom"
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"
import "./App.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div className="container">
            <div className="navbar-position ">

                <Navbar />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /><ToastContainer />
            <div className="outlet">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default App