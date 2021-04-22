function Address(){
    return(
       <div>
           <div className="row">
                <div className="text-center" style={{padding:"5px"}}>
                    <h2>Shipping Details</h2>
                </div>
            </div>
        <form id="addressform">
        <div class="form-group">
                <label for="inputAddress">User Name : </label>
                <input type="text" style={{width:"500px"}} className="form-control" name="name" class="form-control" id="inputAddress" placeholder="Enter Your Name"  />
            </div>
            <div class="form-group">
                <label for="inputAddress">Phone Number : </label>
                <input type="text" name="phone"  style={{width:"500px"}} className="form-control" class="form-control" id="inputAddress" placeholder="Enter Your Phone Number"  />
            </div>
            <div class="form-group">
                <label for="inputAddress">Address : </label>
                <input type="text" className="form-control" style={{width:"500px"}} name="address" class="form-control" id="inputAddress" placeholder="Enter Your address"  />
            </div>
            <div class="form-group">
                <label for="inputAddress">City : </label>
                <input type="text" className="form-control" style={{width:"500px"}} name="city" class="form-control" id="inputAddress" placeholder="Enter Your city"  />
            </div>
            <div class="form-group">
                <label for="inputAddress">Zipcode : </label>
                <input type="text" className="form-control" style={{width:"500px"}} name="zip" class="form-control" id="inputAddress" placeholder="Enter  zipcode"  />
            </div>

            <button className="btn btn-primary">Add Address</button>
            </form>
       </div>
    )
}
 
export default Address