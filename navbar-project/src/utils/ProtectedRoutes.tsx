import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoutes = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchUser = async () => {
    //       try {
    //         const token = localStorage.getItem("accessToken");
    //         console.log(token);
    //         const response = await axios.get("http://localhost:3001/api/get-users-profile", {
    //           headers: { Authorization: `Bearer ${token}` },
    //           withCredentials: true,
    //         });

    //         console.log(response)

    //         return (
    //             <Outlet/>
    //         //    <Navigate to="/Dashboard"/>
    //         )
    //         // setUser(response.data.data);
    //       } catch (err) {
    //         return (
    //             <Navigate to="/Dashboard"/>

    //         )
    //         // navigate("/Login");
    //       }
    //     };

    //     fetchUser();
    //   }, [navigate]);


    const user = true
    const token = localStorage.getItem("accessToken");
    console.log(token);

    return token ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoutes