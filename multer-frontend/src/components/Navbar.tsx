import { Link } from "react-router-dom"
import "../Navbar.css"
const Navbar = () => {

    return (

        <nav className="nav">
            <div className='navbar'>
                <Link to="/multer/upload">Upload</Link>
                <Link to="/multer/gallery">Gallery</Link>
                <Link to="/multer/login">Login</Link>
            </div>

        </nav>

    )
}

export default Navbar