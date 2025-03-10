import { Link } from "react-router-dom"
import "../Navbar.css"
const Navbar = () => {

    return (

        <nav className="nav">
            <div className='navbar'>
                <Link to="/multer">Upload</Link>
                <Link to="/multer/gallery">Gallery</Link>

            </div>

        </nav>

    )
}

export default Navbar