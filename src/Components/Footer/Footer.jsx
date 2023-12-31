import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return (

        <>
            <footer className="footer">

                <div className="footer-links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Link>Terms of Service</Link>
                    <Link>Privacy Policy</Link>
                </div>
                <div className="footer-social">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
