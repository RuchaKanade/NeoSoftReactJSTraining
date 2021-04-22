import { event } from "jquery";
import { Link } from "react-router-dom";
import {useState , useEffect} from "react"
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function Navbar(props){
 
 
  var[searchText , setSearch] = useState('')
  var Logout =  (event)=> {
    event.preventDefault()  //It will prevent all the defailt value of button in form
    props.dispatch({
      type: "LOGOUT"
      
  })

}

 let OnSearch =  (event)=> {
     
       
       setSearch(event.target.value)
      //  console.log("Search  string Value", event.target.value);
       
     }
     
    //  console.log("Search string Text", searchText);
 
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
   <Link to = "/"> <a className="navbar-brand">My Cakeshop</a></Link>
   
    {/* printing the children property passed by the app.js recieving it in the props */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        
        
        <li className="nav-item">
          {props.user && <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
            Welocome {props.user} 
          </a>}
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={OnSearch}/>
        <Link to={`/search?q=${searchText}`}><button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><FontAwesomeIcon icon = {faSearch}/></button></Link>
        {props.loginstatus ? <div>
          <Link to = "/cart"><button className="btn btn-outline-warning my-2 my-sm-0"  type="submit"><FontAwesomeIcon icon = {faShoppingCart}/></button></Link>
        <button className="btn btn-danger" onClick={Logout}>Logout</button>
        </div>
         :<div>
        <Link to="/login"><button className="btn btn-primary" >Login</button></Link>
         </div>
}
      </form>
    </div>
  </nav>
   ) 
}

//mapstatetoprops
export default connect(function(state, props){
  console.log(".....state Initially", state)
  return{
     
   user: state ?.user?.name,
   loginstatus :state?.isloggedin
    
  }
})(Navbar) 

//here state is store data and props is component data
//whenever store data will upadte component data will also get updated 