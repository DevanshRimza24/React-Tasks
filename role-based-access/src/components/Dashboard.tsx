import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from '../utils/TokenContext';

const Dashboard = () => {

    const navigate = useNavigate();
    const { token } = useToken();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                console.log(token);
                if (!token) {
                    navigate("/Login");
                    // return;
                }
                if (token){
                    navigate("/dashboard")
                }

                // const response = await axios.get("http://localhost:3001/api/get-users-profile", {
                //     headers: { Authorization: `Bearer ${token}` },
                //     withCredentials: true,
                // });

                // console.log(response)

                // setUser(response.data.data);
            } catch (err) {
                navigate("/Login");
            }
        };

        fetchUser();
    }, [navigate]);





    return (
        <div className="bg-amber-200 mt-7 text-5xl">
            <h1>Hello</h1>
            <h2>Welcome to Dashboard</h2>
            <div>
            {token && <p>Token: {token}</p>} {/* Display token */}

            </div>


        </div>

    )
}


export default Dashboard