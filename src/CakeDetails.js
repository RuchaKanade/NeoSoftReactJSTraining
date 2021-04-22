import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import  axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";

const star = <FontAwesomeIcon icon={faStar} />
const heart = <FontAwesomeIcon icon={faHeart} />

var cardStyle = {width: "50rem", margin: "30px", border:"1px dotted black"};
var Cake1 = "https://preppykitchen.com/wp-content/uploads/2019/02/red-velvet-cake-social.jpg";


function CakeDetails(props) {
    var [CakeDetails, SetCakeDetails] = useState({})
    
    var[cartitem , setAddcart] = useState({})

    let params = useParams()
    console.log("Params are ..." ,  params)

    useEffect(()=>{
        let CakeDetailsApi = "https://apibyashu.herokuapp.com/api/cake/" + params.cakeid
        axios({
            method : "get",
            url : CakeDetailsApi
           
          
        }).then((response)=>{
            console.log("Reasponse from  CakeDetails api : ", response.data)
            SetCakeDetails(response.data.data)
            //  console.log("CakeDetails....." , CakeDetails)
        },
        (error)=>{
            console.log("Error from  login api", error)
        })

        },[])

       //This function will get execute when user click on Add to cart button
        var AddToCart =  (event)=> {
            event.preventDefault()  //It will prevent all the defailt value of button in form
            var token = localStorage.token
            var CartRequestObj = {
                cakeid : CakeDetails.cakeid,
                name : CakeDetails.name,
                image: CakeDetails.image,
                price : CakeDetails.price,
                weight: CakeDetails.weight

            }

            axios({
                url:'https://apibyashu.herokuapp.com/api/addcaketocart',
                method:"post",
                data : CartRequestObj,
                headers:{
                  authtoken:token
                }      
            }).then((response)=>{
                   console.log("response from  Addtocart api" , response.data)
                   setAddcart(response.data.data)
                //    props.history.push("/cart");    
            },(error)=>{
                console.log("error from Addtocart api" , error)
            })
        }


    return (
        <div className="card" style={{margin: "20px 140px"}}>
        <div className="card-body" style={{backgroundColor: "rgba(0,0,0,.03)"}}>
            <div className="row">
                <div className="col-sm-6">
                    <div style={{margin: "10px 60px"}}>
                        <img src={CakeDetails.image} 
                        class="card-img-top" alt="..." height="700px" />
                    </div>

                </div>
                <div className="col-sm-6">
                    <div style={{margin: "10px 20px"}}>
                        <h1 className="text-uppercase font-weight-bold pt-5 pb-3">{CakeDetails.name}</h1>
                        <div className="pb-3">
                            <span className="text-warning">{star}{CakeDetails.ratings}</span>
                            <br/><span style={{fontSize: "18px"}}>{CakeDetails.reviews} reviews</span>
                        </div>
                        <div className="pb-3">{CakeDetails.description}</div>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Current price: 
                            <span className="text-warning">{CakeDetails.price}</span>
                            </span>
                        </div>
                        <div className="pb-3"><span className="font-weight-bold">91%</span> of user enjoyed this product!
                            <span className="font-weight-bold"> ({CakeDetails.likes} votes)</span>
                        </div>

                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Weight: {CakeDetails.weight}</span></div>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Flavour: 
                                <span className="font-italic text-warning">{CakeDetails.flavour}</span>
                            </span>
                        </div>

                        <div className="pb-3 text-uppercase" style={{fontSize: "23px"}}><span className="font-weight-bold">{CakeDetails.type}</span><br/>general</div>

                        
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="font-weight-bold" style={{fontSize: "18px"}}>Ingredient:</div>
                    <div style={{fontSize: "16px"}}>{CakeDetails.ingredients} </div>
                    
                </div>
                { props.loginstatus ?
                <div className="col-sm-6" style={{fontSize: "20px"}}>
                   <button type="button" class="btn btn-warning text-uppercase p-3 text-white mr-2 font-weight-bold" onClick={AddToCart}>Add to cart</button>
                    <button type="button" class="btn btn-warning p-3 text-white font-weight-bold">{heart}</button>
                </div> 
                : <button className="btn btn-danger">Do LoginFirst</button>}
            </div>
        </div>
        </div>
    )
}

export default connect(function(state, props){

        return {
            loginstatus:state?.isloggedin,
        }
    
})(CakeDetails);