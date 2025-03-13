
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {

    const navigate = useNavigate()
    useEffect(() => {

        const fetchUser = async () => {

           try {
             const token = localStorage.getItem("accessToken")
             const role = localStorage.getItem("role")
             if (!token) {
                navigate("/Login");
                // return;
            }             
            else if(role!="ADMIN") {
                console.log(34)
                alert("Only admin can access this page")
                navigate("/dashboard")
            }
            else if (token){
                console.log(5)
                navigate("/adminDashboard")
            }


           }
           catch (error){
            navigate("/Login");
           }

        }


        fetchUser()
    }, [navigate])


    return (
        <div>

            <h2>Welcome to Admin Dashboard</h2>
        </div>
    )

}

export default AdminDashboard