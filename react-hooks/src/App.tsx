import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createContext } from 'react'
import React from 'react'
import './App.css'
import { useLocalStorage } from './useLocalStorage'

function App() {


  // const [name, setName] = useLocalStorage("", "");
  // console.log(name)
  // const handleChange = (e: any) => {
  //   setName( `${e.target.value}`) 
  // }


  // const defaultTheme = {
  //   darkTheme: false,
  // };
  // const ThemeContext = React.createContext(defaultTheme)

  // const [darkTheme, setDarkTheme] = useState()
  //   const [resourceType, setResourceType] = useState("posts")
  // const [items, setItems] = useState([])

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // const [name, setName] = useState("")
  // const renderCount = useRef(0)



  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1
  // })

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/$(resourceType)`)
  //   .then(response => response.json())
  //   .then(json => setItems(json))
  // },[resourceType])


  return (
    <>



    

      {/* <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} /> */}


      {/* <ThemeContext.Provider value={ darkTheme}>

    </ThemeContext.Provider> */}
      {/* <input type="text" value={name} onChange={e => setName(e.target.value)}/>
<div>My name is {name}</div>
<p>{renderCount.current}</p> */}

      {/* <div>
      {windowWidth}
    </div> */}

      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}

    </>
  )
}

export default App
