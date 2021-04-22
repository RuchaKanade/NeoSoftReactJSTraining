
import { useState } from 'react';
import './App.css';
import Home from "./Home";
import Login from './Login';
import Navbar from "./Navbar";
import Signup from './Signup';
import Search from "./Search";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CakeDetails from './CakeDetails';
import axios from "axios"
import {connect} from "react-redux"
import Cart from "./Cart"
import Checkout from "./Checkout"
import dmart from "./reduxstore/store"


// console.log("Getting the data from store", dmart.getState())


function App(props) {
  //  var [user,SetUser] = useState()
  // var[loginstatus , Setloginstatus] = useState(false)
  //  function  Logindone(data) {
  //    //alert("Login component is called the parent(App)")
  //    SetUser(data)
  //    Setloginstatus(true)
  //  }
  
  if(localStorage.token && !props.user){
    
    
    var token = localStorage.token
    console.log("means user is already logged in.....")
    axios({
      url:'https://apibyashu.herokuapp.com/api/getuserdetails',
      method:"get",
      headers:{
        authtoken:token
      }      
  }).then((response)=>{
         console.log("response from  user details api" , response.data)
          props.dispatch({
              type:"SET_USER",
              payload:response.data.data
          })         
  },(error)=>{
      console.log("error from user  details api" , error)
  })

  ///Api call for cartcake
  let CartDetailsAPI = "https://apibyashu.herokuapp.com/api/cakecart"
  axios({
      url:CartDetailsAPI,
      method:"post",
      data: {},
      headers : {
          authtoken: token
      }
  }).then((response)=>{
      props.dispatch({
        type:"CART_DATA",
        cart_data:response.data.data
    })
      
      
  }, (error)=>{
      console.log("response from cake deatils api : ",error)
  })
}
  



  //Router will look for path into addressbar and load corresponding component  
  return (
    <div>
      
      <Router>
      <Navbar></Navbar>
        <div>
          <Switch>
          <Route path="/" exact component={Home}></Route>
         
          {!props.loginstatus && <Route path="/login" exact ><Login/></Route>}
          <Route path="/search" exact component={Search}></Route>
          {props.loginstatus ? <Route path="/checkout" component={Checkout}></Route>
          :<Route path="/cart" exact component={Home}></Route>}
          {/* here we remove exact keyword bacause we are using child routing in checkout */}
          {!props.loginstatus && <Route path="/Signup" exact component={Signup}/>}
          {props.loginstatus ? <Route path="/cart" exact component={Cart}/>
          :<Route path="/cart" exact component={Home}></Route>} 
          {/* Route Guard */}
          <Route path="/cake/:cakeid" exact component={CakeDetails}/>
          <Route path="/*">
         <Redirect to="/"></Redirect>
         </Route>
         </Switch>   

         </div> 
      </Router>
      
    </div>
  );
}

export default connect(function(state, props){
 
  return{
  user : state?.user,
  loginstatus : state?.isloggedin
    
  
  }
})(App);

{/* Here : indicates a params(varaiable), and cakeid is dynamic */}
          {/* If we dont use exact keyword homepage will come beofore all the component */}
          {/* <Router path="/*" component={Pagenotfpound}/> */}

          {/* this is component when we enter invalid address   */}