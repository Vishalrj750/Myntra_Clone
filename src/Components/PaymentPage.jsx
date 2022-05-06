import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const LoginWrapper = styled.div`
body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
    margin-left:40px;
    margin-right:40px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
    
  }
  
  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }
  
  .col-50 {
      
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }
  
  .col-75 {
    padding:20px;
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }
  
  .col-25,
  .col-50,
  .col-75 {
     padding: 0 16px;  
  }
  
  .container {
    // background-color: #f2f2f2;
    background-color: aliceblue;
    padding: 5px 200px 5px 200px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }
  
  input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  label {
    margin-bottom: 10px;
    display: block;
  }
  
  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }
  
  .btn {
    background-color: rgb(212, 62, 87);
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }
  
  .btn:hover {
    background-color: #9867C5;
  }
  
  a {
    color: #2196F3;
  }
  
  hr {
    border: 1px solid lightgrey;
  }
  
  span.price {
    float: right;
    color: grey;
  }

`

const PaymentPage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/thankyou')
  }
 
 

  return (
    <LoginWrapper>

      
        <div className="row">
  <div className="col-75">
    <div className="container">
      
      <br /><br /><br /><br /><br />
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" idName="fname" name="firstname" placeholder="John M. Doe" />
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" idName="email" name="email" placeholder="john@example.com" />
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" idName="adr" name="address" placeholder="542 W. 15th Street" />
            {/* <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" idName="city" name="city" placeholder="New York" /> */}

            <div className="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" idName="state" name="state" placeholder="NY" />
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" idName="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
           
            <label for="cname">Name on Card</label>
            <input type="text" idName="cname" name="cardname" placeholder="John More Doe" />
            <label for="ccnum">Credit card number</label>
            <input type="text" idName="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label for="expmonth">Exp Month</label>
            <input type="text" idName="expmonth" name="expmonth" placeholder="September" />
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" idName="expyear" name="expyear" placeholder="2018" />
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" idName="cvv" name="cvv" placeholder="352" />
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" name="sameadr" /> Shipping address same as billing
        </label>
        {/* <input  value="Continue to checkout" className="btn" /> */}
        <button type="submit" className="btn"  onClick={ () => handleClick() } >PAY NOW</button>
     
    </div>
  </div>
  
</div>

   
        

    </LoginWrapper>
  )
}

export { PaymentPage }



