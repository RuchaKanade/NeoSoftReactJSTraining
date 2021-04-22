//JSX => Whenver we see html tag in js file it callled jsx.
//It simply extends th JS capabilties to understand html

import  Carousel from "./Carousel";
import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";
import CakeDetails from "./CakeDetails";
//  import cakes from "./data"

var obj = {
  name : "Choclate Truffle",
  image : "cake.jpg",
  id  : 1234,
  price : 600
}

//Lenghth is defined it will simple not print anything
//cakes is undefined // property of undefined => lenghth
//property is undefined that is problematic

function Home(){
  let [cakes, Setcakes] = useState([])
  let allcakesapi = "https://apibyashu.herokuapp.com/api/allcakes"

  useEffect(()=>{ // we are calling api in mount and updated method in functional component which method is known as
    // useEffect()
    axios({ 
      url: allcakesapi,
      method : "get",
      
    }).then((response)=>{
      // console.log("Reasponse from allcakes api : ", response.data)
      Setcakes(response.data.data)
      
  },
  (error)=>{
      console.log("Error from  allcakes api", error)

  })
  })

    return(
        <div>
        <Carousel />
        <div className="row">
        {/*<Cake name="Choclate Truffle"  image = "cake.jpg"/>*/}
      {/*whenever we pass props like above it will create obj in background and will send ir to cake component.
        //{name: "choclate Truffle" image: "cake.jpg"}*/}
      {/* <Cake cakedata = {obj}/> */}

      {/* Arraykaname.map((each , index)=>) */}

      {cakes?.length>0 && cakes.map((each,index)=>{
        return(
          <Cake cakedata={each} key={index}></Cake>
          // we are passing key (index) to uniqueli identify the elements
        )
        // when we dont know how many objs in an array , map operator will map all the obj from array cakes


      })}
      

      
</div>

   
   </div>
    )
}

//This function is returning div tag(html therefore it jsx)
//It is a component

//Export function
 export default Home

 