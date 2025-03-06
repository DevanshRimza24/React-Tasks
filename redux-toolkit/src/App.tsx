import { useAppDispatch, useAppSelector } from './redux/hooks'
import './App.css'
import { increment, decrement } from './redux/slices/counter/index'
import { store } from './redux/store'

function App() {
  
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  console.log(store.getState)
  return (
    <>
      <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      </div>
      
      
    </>
  )
}

export default App
