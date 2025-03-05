// import { createStore } from "redux"

import { createStore } from 'redux'
import counterReducer from '../reducers/CounterReducer'

const store = createStore(counterReducer)

export default store














// const ADD_TASK = "task/add"
// const DELETE_TASK = "task/delete"

// const initialState = {
//     task : []
// }



// const taskReducer = (state = initialState, action : any) => {
//     switch(action.type){

//         case 'ADD_TASK' :
//             return {...state, data : action.payload}


//         case 'DELETE_TASK' :
//             const updatedTask = state.task.filter((curTask, index) => {
//                return index != action.payload
//             })
//             return {...state, task: updatedTask}

//         default :
//         return state    
//     }
// }

//  const store = createStore(taskReducer)

// console.log(store)


// export default store