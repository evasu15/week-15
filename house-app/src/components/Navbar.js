import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">My Work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;