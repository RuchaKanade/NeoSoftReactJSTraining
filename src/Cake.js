//boostrap card component

import { Link } from "react-router-dom"

function Cake(props) {
    
    return(
        
        
        <div className="card" style={{width: "15.8rem"}}> 
        {/*Here we use double {} because we have to mention 
        //Object inside {} for style // 1 {} is for obj and another is for style*/}
  <Link to={'/cake/'+ props.cakedata.cakeid}><img src={props.cakedata.image} style={{height:"200px"}} className="card-img-top container-fluid" alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title">{props.cakedata.name}</h5>
    
  </div>
</div>

    )
    
}

export default Cake