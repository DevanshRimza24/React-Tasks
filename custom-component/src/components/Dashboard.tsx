import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from '../utils/TokenContext';
import { UserCard } from "./UserCard";
import {  useAppSelector, useAppDispatch } from "../redux/hooks";

// import { useDispatch } from "react-redux";
import { display } from "../redux/slices/token";
import { AppDispatch } from "../redux/store";

const Dashboard = () => {

    const navigate = useNavigate();
    const { token } = useToken();
    // const [users, setUsers] = useState([]);

    const tok = useAppSelector(state => state.token)

//   const dispatch = useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

    const [userProps, setUserProps] = useState<{
        id: number,
        name: string,
        email: string,
        profileUrl?: string,
        department?: string
    }[]>(
    //     [{

    //     id: 0,
    //     name: '',
    //     email: '',
    //     profileUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",  
    //     department: ''
    // }]
    )

    // const props = [{
    //     profileUrl: "",
    //     designation: ""
    // }


    // ]

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                // console.log(token);
                if (!token) {
                    navigate("/Login");
                    // return;
                }
                if (token) {
                    navigate("/dashboard")
                }

                const response = await axios.get("http://localhost:3001/api/get-users-profile", {
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true,
                });

                // setUsers(response.data.data)
                setUserProps(response.data.data)
                // console.log(userProps)
                // console.log(response.data.data)
                // setUser(response.data.data);
            } catch (err) {
                navigate("/Login");
            }
        };

        fetchUser();
    }, [navigate]);





    return (
        <div className=" mt-7 text-xl">

<h2>Token : {tok}</h2>
      <button onClick={()=>{dispatch(display())}}>
        
        Dispaly Token
      </button>
           

            {userProps ? (

                userProps?.map((userProp: any) => {

                    // console.log(userProp)
                    // const userProps = {

                    //     id: user.id,
                    //     name: user.name,
                    //     email: user.email,
                    //     designation: "",
                    //     profileUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    // };

                    return <UserCard user={{...userProp,profileUrl:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}} key={userProp.id} />
                })) : (<p>No user found</p>)
            }

            {/* <UserCard user={users[0]}/> */}


            {/* <h1>Hello</h1>
            <h2>Welcome to Dashboard</h2>
            <div>
            {token && <p>Token: {token}</p>} 

            </div> */}


        </div>

    )
}


export default Dashboard