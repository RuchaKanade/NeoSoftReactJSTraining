import { connect } from "react-redux"
import { Link } from "react-router-dom"

function CartSummary(props){

     
    
    
    return(
            <div>
            <h2 style={{color:"black",fontStyle:"italic"}}>YOUR CART SUMMERY</h2>
            { props.CartDetails ?.length > 0 && props.CartDetails.map((each, index)=>{
		          return (<div class="media">
            <img src={each.image}  class="mr-3" alt="..." style={{width:"150px",height:"100px"}}/>
            <div class="media-body">
                <h4 class="mt-0" style={{color:"#b9384f"}}>{each.name}</h4>
                <p class="mt-0" style={{color:"#f4c55c",fontWeight:"bold"}}>quantity : {each.quantity}</p>
                <p style={{color:"#329e72",fontWeight:"bold"}}>Price : {each.price}/-</p>
            </div>
            </div>
            )
        })
    }
   <Link to ="/checkout/address"><button className="btn btn-primary" style={{float:"left"}}>NEXT</button></Link> 
        </div>
    )
        
    
}
 
export default  connect(function(state,props){
    console.log("Checkout....", state)
    return{
        CartDetails : state ?.Cart_data

    }
})(CartSummary);