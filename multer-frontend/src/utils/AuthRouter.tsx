import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Upload from "../components/Upload";
import Gallery from "../components/Gallery";
import View from "../components/View";
import Login from "../components/Login";

const appRouter = createBrowserRouter([
    {
        path: "/multer",
        element: (
          <div className="App ">
            <Navbar />
            <Outlet />
           </div>
        ),
        children: [
          {
            path: "/multer", 
            element: <Login />,
          },
          {
            path: "/multer/Login", 
            element: <Login />,
          },
          {
            path: "/multer/Upload", 
            element: <Upload />,
          },
          {
            path: "/multer/Gallery", 
            element: <Gallery />,
          },
          {
            path: "/multer/View", 
            element: <View />,
          },
          
        ]
    }
])


export default appRouter