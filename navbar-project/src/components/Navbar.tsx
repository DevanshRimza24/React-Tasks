import React from "react";
import {Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"


const Navbar = () => {
return (
   <nav className="bg-gray-200 fixed top-0 left-0 w-full z-10 max-h-auto flex justify-between">
      <div className="p-4">Logo</div>
      <div className="flex ">
         <ul className="flex p-4 space-x-8">
            <li className="">
            <Link to="/Home">Home</Link>
               </li>
            <li>
            <Link to="/About">About</Link>
               </li>
            <li>Services</li>
            <li>
             <Link to="/Login">Login</Link>  
               </li>
         </ul>
      </div>
   </nav>

)
   
}


export default Navbar;