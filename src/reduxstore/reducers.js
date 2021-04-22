var demo = function(state={
    user : null   //when application reload wgole redux data is vanish
}, action) {
    switch(action.type){
        case "LOGIN" :{
            console.log("Here we have to write logic for login")
            state = {...state}  //here we are copying the all the state data in another state
            //for eg. we are creating another file and copied original file data into that and doing modification in another file
            
            state["isloggedin"] = true
            state["user"] = action.payload
            return state
        }
        case "LOGOUT" :{
            console.log("Here we are changing logout button to login")
            state = {...state}
            localStorage.clear()
            delete state["user"]
            delete state["isloggedin"]
            
            return state
        }
        case "SET_USER" :{
            console.log("Here we are storing the users data")
            state = {...state}  
            state["isloggedin"] = true
            state["user"] = action.payload
            return state
        }
        case "ItemsInCart" : {
            console.log("Here we are storing the cart items")
            state = {...state}  
            state["Cart"] = action.payload
            return state
        }

        case "CART_DATA" : {
            console.log("Here we are storing the cart data on page refresh")
            state = {...state}  
            state["Cart_data"] = action.cart_data
            return state
        }
        
        


        
        default :  return state
    }
}
export default demo