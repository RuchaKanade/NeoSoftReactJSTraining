import React from 'react'
import axios from 'axios'
import {useEffect , useState} from "react";
import { Link ,withRouter} from "react-router-dom"
import { connect } from "react-redux";

function Cart(props)
{
    let [checkCart,setcheckCart]=useState(false)
    
    let [cartitems,SetCartItems]=useState([])  //to store the cartitems
    var token = localStorage.token

    //This function will execute whenver page will get load(constructed)
    //This function call cakecartapi and show all the cakes in cart
    useEffect(()=>{
        let allcakecartapi="https://apibyashu.herokuapp.com/api/cakecart"
        axios({
        url:allcakecartapi,
        data : {}, //passing the empty obj
        method:"post",
        headers:{
            authtoken:token //for Authorization(if we dont pass we will get authorization error)
          } 
    }).then((response)=>{
        //statuscode : 200OK
        console.log("response from  cart details  api" ,response)
        SetCartItems(response.data.data) //storing all the cart item in aray of cartitems
        console.log("......cart",cartitems)
        setcheckCart(false) //setting it to false
        props.dispatch({
            type:"ItemsInCart", //this will go in reducer annd execute the matching case
            payload:response.data.data   //this will store the items in cart in store
        })
        
    },(error)=>{
        console.log("error from cart details api",error)
    })
    },[checkCart])  //here we are passing checkCart because whenver its value change it will get call again




    //This function will get execute whenever use will click on Remove button from cart
    function remove(cakeid){
     
        var cartremove={
            cakeid:cakeid,      
        }
        console.log(" cake details : " ,cartremove)
        var token = localStorage.token
        let cartapi="https://apibyashu.herokuapp.com/api/removecakefromcart"
        axios({
            url:cartapi,
            method:"post",
            data:cartremove,
            headers:{
                authtoken:token
              } 
        }).then((response)=>{
            console.log("response from remove item from cart api" , response.data)
           
            setcheckCart(true)
            
        },(error)=>{
            console.log("error from remove item from cart api" , error)
        })
    }
    



    //view
    return(
        
               <div class="container">
            
                   <div>
                       
                   {props.CartDetails?.length > 0 ? 
                          
            
                      <div class="col-sm-12 col-md-10 col-md-offset-1">
                          <h1 style={{textAlign:'center'}}>My Cart</h1>
                        <table class="table table-hover">
                          <thead>
                            <tr>
                                <th>Product</th>
                                
                                <th class="text-center">Price</th>
                               
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.CartDetails.map((each, index)=>{
                            return(
                        <tr>
                                <td >
                                <div class="media">
                                    <a class="thumbnail pull-left" href="#"> <img class="media-object" src={each.image} style={{width: "72px", height: "72px"}}/> </a>
                                    <div class="media-body">
                                        <h4 class="media-heading"><a href="#">{each.name}</a></h4>
                                        <h5 class="media-heading"> Weight : <a href="#">{each.weight} kg</a></h5>
                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                    </div>
                                </div></td>
                                
                                <td class="col-sm-1 col-md-1 text-center"><strong >{each.price}/-</strong><input type="hidden" id="proprice" value={each.price}/></td>
                                
                                <td class="col-sm-1 col-md-1">
                                <button type="button" class="btn btn-danger" onClick={() => remove(each.cakeid)}>
                                    <span class="glyphicon glyphicon-remove"></span> Remove
                                </button></td>
                                
                            </tr>
                       
                    

                            )
                        })
                    } 
                        </tbody>
                    </table>
                    <div>
                    <Link to="/"><button style={{float:'left'}} className="btn btn-success">Continue to Sopping</button></Link>
                  <Link to="/checkout"><button style={{float:'right'}} className="btn btn-success">CheckOut</button></Link>
                     </div>
                    </div>
                 
                   : <div className="alert alert-danger"> YOUR CART IS EMPTY</div>
                }
        
                    </div>

    </div>
    )
}
 Cart = withRouter(Cart)
export default connect(function(state,prop){
    return{
        loginstatus: state?.isloggedin,
        CartDetails : state?.Cart
        
    }
})(Cart)
