import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pagination } from "antd";


function App(): React.FC {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pagination defaultCurrent={1} total={50} />
      
        <h2>Heyyyy</h2>


    </>
  )
}

export default App
