import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Routes, Route, Navigate, useNavigate } from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home"
import About from "./About"

function SomeComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/About"); // Programmatically navigate to About
  };

  return <button onClick={handleClick}>Go to About</button>;
}


function App() {
  // const navigate = useNavigate();

  // const handleButton = async () => {
  //   navigate("/Home")
  // };


  return (
    <>


<BrowserRouter>
      <div>
         <div className='text-2xl font-bold'>test</div>
          <nav >
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/Home" element={<Home name="adssd"/>}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>


        <SomeComponent />

        {/* <button onClick={handleButton}>Home</button> */}
      </div>
      </BrowserRouter>


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
