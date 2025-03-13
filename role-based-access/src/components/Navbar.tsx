import React from "react";
import { Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem("accessToken"); // Remove the token from localStorage
      navigate("/Login"); // Redirect to Login page
   };

   const isLoggedIn = localStorage.getItem("accessToken");

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
               {isLoggedIn ? (
                  <li>
                     <Link onClick={handleLogout} to="/Login">Logout</Link>
                  </li>
               ) : (
                  <li>
                     <Link to="/Login">Login</Link>
                  </li>
               )}
               {/* <li>
                  <Link to="/Login">Login</Link>
               </li> */}
            </ul>
         </div>
      </nav>

   )

}


export default Navbar;