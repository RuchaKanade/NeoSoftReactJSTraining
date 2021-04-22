import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";
import queryString from 'query-string';

function Search(props){
    let [cakesresults, SetcakesResults] = useState([])
    // console.log("props elements" , props)
    var querystr =  queryString.parse(props.location.search);
    console.log("Search Text : ", querystr.q)
    let searchcakeapi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + querystr.q
  
    useEffect(()=>{ // we are calling api in mount and updated method in functional component which method is known as
      // useEffect()
      axios({ 
        url: searchcakeapi,
        method : "get",
        
      }).then((response)=>{
        console.log("Reasponse from Searchcake api : ", response.data)
        SetcakesResults(response.data.data)
        
    },
    (error)=>{
        console.log("Error from  searchcake api", error)
  
    })
    },[props.location.search])
  
      return(
          <div className="container">
         
          <div className="row">
          
        
        {cakesresults?.length>0  ? cakesresults.map((each,index)=>{
          return(
            <Cake cakedata={each} key={index}></Cake>
          )
  
  
        }) : <div className="alert alert-danger"> Results NOT FOUND for the cakes searched by the user 
            Try Searching for another cake </div>}

       
  
        
  </div>
     
     </div>
      )
  }

  export default Search
  