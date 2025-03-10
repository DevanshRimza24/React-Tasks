import { useState } from 'react'
import { BrowserRouter, Link, RouterProvider } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  appRouter from "./utils/AuthRouter"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router ={appRouter} />
     {/* <BrowserRouter>
       <div className='navbar'>
           <Link to= "/">Upload</Link>
           <Link to= "/gallery">Gallery</Link>

       </div>
     </BrowserRouter> */}
      
    </>
  )
}

export default App
