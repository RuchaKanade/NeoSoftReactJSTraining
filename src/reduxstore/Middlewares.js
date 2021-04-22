// export function FirstMiddleware(store){
//     return function(next){
//         return function(action){
//             console.log("action", action, "Store" , store.getState())


//             var result = next(action) //it will send action to reducers
//             console.log("After action if Middleware" , store.getState())
            
//             return result
//         }
//     }
// }

//Arrow function
// let square =  function(num){
//     return num * num
// }

// let square = num => num*num

//es6 SYNTAX
export let logger = store=>next=> action=>{
    console.log("action", action, "Store" , store.getState())


            var result = next(action) //it will send action to reducers
            console.log("After action in Middleware" , store.getState())
            
            return result

}