import { Link } from "react-router-dom"
import "../Navbar.css"
const Navbar = () => {

    return (

        <nav className="nav">
            <div className='navbar'>
                <Link to="/">Upload</Link>
                <Link to="/gallery">Gallery</Link>

            </div>

        </nav>

    )
}

export default Navbar