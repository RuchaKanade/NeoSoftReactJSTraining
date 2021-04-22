import { Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import Ordercake from "./OrderCake";
import Address from "./Address";
import Payment from "./Payment";

//Here we are using children Routing , here checkout is parent
function Checkout(){
  var route = useRouteMatch() //it gives path,url , params
  var url = route.url
  var path = route.path  //It give "/checkout"


  //url and path both gives the same but we write it as for naming convention
  console.log(".......", route)
     
    return<div className="row">
        <div className="col-4">
           <Link to= {url}><li className="a">Cart Summary</li></Link>
           <Link to= {url+"/address"}><li className="a">Add Address</li></Link>
           <Link to= {url+"/order"}><li className="a">Order</li></Link>
           <Link to= {url+"/payment"}><li className="a">Payment</li></Link>
            

        </div>
        <div className="col-8">
            <Route exact path = {path} component={CartSummary}></Route>
            <Route exact path = {path + "/address"} component={Address}></Route>
            <Route exact path = {path + "/payment"} component={Payment}></Route>
            <Route exact path = {path + "/order"} component={Ordercake}></Route>
            
        </div>
    </div>
}

export default Checkout