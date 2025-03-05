import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Routes, Route, Navigate, useNavigate, RouterProvider, Router, createBrowserRouter, Outlet } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import ProtectedRoutes from './utils/ProtectedRoutes'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import AuthRouter from './utils/AuthRouter'
import appRouter from "./utils/AuthRouter"






function App() {

  return (
    <>

       <RouterProvider router ={appRouter} />
      {/* <BrowserRouter>
        <div className="App bg-yellow-100">
          <Navbar />
          
        </div>


        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>

         


          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
          </Route>

          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter> */}


    </>
  )
}

export default App
