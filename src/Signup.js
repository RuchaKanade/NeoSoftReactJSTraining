import axios from "axios"
import {Component} from "react"
class Signup extends Component{
    constructor(){
        super()  //it's intializes component, class, state
        this.state ={
        //   OnlineUsers : 0
        errorMessage : ""
         }
        // alert("In Construction....")
    }

    // componentDidMount(){
    //     alert("Component Constructed or mounted")
    // }

    componentDidUpdate(){
     alert("component is Updated")
     }

    // componentWillUnmount(){
        
    // }

    user = {}
    GetName = (event) =>{
        this.user.name = event.target.value
        console.log("......", event.target.value)

    }
    

    GetEmail = (event) =>{
        this.user.email = event.target.value
        console.log("......", event.target.value)

    }
    GetPassword = (event) =>{
        this.user.password = event.target.value //event.target.value will give the passord enter by the user in imput section

    }

    Register = (event) =>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage : "Please Fill all the Deatils"
            }
            )
        }
            else{
                let apiurl = "https://apibyashu.herokuapp.com/api/register"
                axios({
                    url:apiurl,
                    method: "post",
                    data : this.user
                }).then((response)=>{
                    console.log("Reasponse from api : ", response)
                    
                },
                (error)=>{
                    console.log("Error from api", error)

                })
                
                


                this.setState({
                    errorMessage : null
                })
            }
           
        
        console.log("User Details : ", this.user)

    }


    // GoOnline = () => {
    //     console.log("....", this)
    //     this.setState({
    //          OnlineUsers : this.state.OnlineUsers+1
    //      })
    //  }
   
    render(){
        return(
            <div style={{width:"50%", margin:"auto"}}>
                {/* Hey Users!! {this.state.OnlineUsers}  */}
                <div className ="form-group">
                    <label>Name :</label>
                <input type="text" className="form-control" onChange={this.GetName}></input>
                </div>
                <div className ="form-group">
                    <label>Email :</label>
                <input type="email" className="form-control" onChange={this.GetEmail}></input>
                </div>
                <div className ="form-group">
                    <label>Password : </label>
                <input type="password" className="form-control" onChange={this.GetPassword}></input>
                </div>
                <div style = {{color:"red"}}>
                    {this.state.errorMessage} 
                </div>
                <button className="btn btn-primary" onClick={this.Register}>Register</button>

                 {/* <button onClick={this.GoOnline}>Go Online!!</button>  */}


                {/*<button onClick={this.GoOnline.bind(this)}>Go Online!!</button> when we are not writing goonline method in Arrow function*/}
            </div>
        )
    }
}
export default Signup