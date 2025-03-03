import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import ProtectedRoutes from './utils/ProtectedRoutes'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App bg-yellow-100">
          <Navbar />
          {/* <div className="text-center">
          <h1 className="text-4xl">Welcome to MyApp</h1>
        </div> */}
        </div>


        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}


          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
          </Route>

          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
