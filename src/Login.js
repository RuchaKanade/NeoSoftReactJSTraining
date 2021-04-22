import {useState, useEffect} from "react"
import axios from "axios"
import {Link, withRouter} from "react-router-dom"
import {connect} from "react-redux"
//component did mount
//componentdidipdate 
//useEffect will work as both

function Login(props) {

    console.log(">>>> props of login" , props)

    var [user, setUser] =useState({}) //we are passing the blanck obj({})
 
     let GetEmail = (event)=>{
         setUser({
             email: event.target.value,
             password: user.password
         })
        user.email = event.target.value
        console.log("......", event.target.value)

    }
    let GetPassword = (event)=>{
        setUser({
            // ...user,
            password: event.target.value, //updating the password value on screen 
            email: user.email //abother way to copy other property from obj 
            
        })
       user.password = event.target.value //event.target.value will give the passord enter by the user in imput section

    }

    let Login = function () {
        let loginapi = "https://apibyashu.herokuapp.com/api/login"
        console.log("user is trying to login",  user)
        axios({
            url : loginapi,
            method : "post",
            data : user
        }).then((response)=>{
            console.log("Reasponse from  Login api : ", response)
             if(response.data.token){
                //  props.informlogin()
                localStorage.token = response.data.token
                 props.dispatch({
                     type: "LOGIN",
                     payload : response.data
                 })
                props.history.push("/")
                // props.informlogin()
             }
             else{
                 alert("Invalid Credentials")
             }
            
        },
        (error)=>{
            console.log("Error from  login api", error)
            alert("Invalid Credentials....")
        })

        }
        
    return(
      
            <div style={{width:"50%", margin:"auto"}}>
                <label>LOGIN</label>
                <div className ="form-group">
                    <label>Email :</label>
                <input type="email" className="form-control" onChange={GetEmail}></input>
                {user && <label>{user.email}</label>}
                </div>
                <div className ="form-group">
                    <label>Password : </label>
                <input type="password" className="form-control" onChange={GetPassword}></input>
                {user && <label>{user.password}</label>} 
            
                </div>
                
                <div>
                 <Link to = "/signup"> New User?Click ME!!</Link> 
               
                <div style={{float:"right"}}>
                 <Link to = "/forgot">Forgot Password??</Link> 
                 </div>
                </div>
            <button className="btn btn-primary" onClick={Login}>Login</button>
                </div>
    )
    
}
Login = withRouter(Login)
export default connect()(Login)
//above line added props to login component known as dispatch

{/* Conditional rendering => if user is there than oly user.email will execute */}