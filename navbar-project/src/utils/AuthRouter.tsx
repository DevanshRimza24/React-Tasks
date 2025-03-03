import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About"
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null; 
  };



  const LoginRedirect = () => {
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuthenticated() && location.pathname === "/Login") {
        navigate("/Dashboard"); 
      }
    }, [location, navigate]);
  
    return !isAuthenticated() ? <Login /> : <Outlet/>;
  };
const appRouter = createBrowserRouter([

    


    {
      path: "/",
      element: (
        <div className="App ">
          <Navbar />
          <Outlet/>
         </div>
      ),
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/Home", 
          element: <Home />,
        },
        {
          path: "/About", 
          element: <About />,
        },
        {
          path: "/Login", 
          element: <LoginRedirect />,
        },
        {
          path: "/Signup", 
          element: <Signup />,
        },
        {
          path: "/Dashboard", 
          element: (
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);




export default appRouter 