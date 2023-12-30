import { Outlet } from "react-router-dom"
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <div className="navbar-position ">

                <Navbar />
            </div>
            <div className="outlet">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default App