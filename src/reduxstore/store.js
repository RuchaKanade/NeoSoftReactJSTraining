import {createStore,  applyMiddleware} from "redux"
import demo from "./reducers"
import {logger} from "./Middlewares"

var middleware = applyMiddleware(logger)

 export default createStore(demo,middleware)

// store.dispatch({
//     type:"login"
// })

// console.log(".......", store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload : {email:"kanaderucha1998@gmail.com", name:"Rucha Kanade"}
// })

// console.log(".......After Login ", store.getState() )
 
 //parameters which we passed in dispatch are known as actions
 //actions are plain js object whith key known as type
// export default store




