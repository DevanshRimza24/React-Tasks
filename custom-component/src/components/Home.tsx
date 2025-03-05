import React from "react";
import store from "../utils/store"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/index';

const Home = () => {

    const count = useSelector((state: any) => state.count);
    console.log(count)
    const dispatch = useDispatch();

    return (

        <div>
            <h2>Welcome to Home Page</h2>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>



    )
}




export default Home