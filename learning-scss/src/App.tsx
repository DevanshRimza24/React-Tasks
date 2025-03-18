import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='parent'>

    <header>
               <p>Header Section</p>
      </header>


      <div className='container'>
            <p>Helloooo</p>
            <button>Click me</button>
      </div>
      
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </div>
     
    
  )
}

export default App
