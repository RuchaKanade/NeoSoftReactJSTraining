import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp , faSadCry} from "@fortawesome/free-solid-svg-icons";
function Payment(){
    return(
        <div className="Container">
            <h1>Payment</h1>
            <div className="row">
                <label className="lable1"  style={{color:"red"}}> Sorry!! We don't Provide Online Payment </label>
            </div>
            <div>
                <label className="lable1" > CASH ON DELIVERY IS AVAILABLE <FontAwesomeIcon icon = {faThumbsUp}/></label>
            </div>
        </div>
    )
}
 
export default Payment