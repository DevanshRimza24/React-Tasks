import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Upload from "../components/Upload";
import Gallery from "../components/Gallery";
import View from "../components/View";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
          <div className="App ">
            <Navbar />
            <Outlet />
           </div>
        ),
        children: [
          {
            path: "/", 
            element: <Upload />,
          },
          {
            path: "/Upload", 
            element: <Upload />,
          },
          {
            path: "/Gallery", 
            element: <Gallery />,
          },
          {
            path: "/View", 
            element: <View />,
          },
        ]
    }
])


export default appRouter