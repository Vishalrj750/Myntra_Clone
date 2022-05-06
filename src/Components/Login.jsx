import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const LoginWrapper = styled.div`
.button{
  display:flex;
}
// .login1{
//     display:flex;
//     flex-direction: column;
// }


body {
    box-sizing: border-box;
    margin: auto;
    margin-top: 30px;
  
    padding: 20px;
    background-color: white;
    font-family: "lato", sans-serif;
  }
  
  .signupFrm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  
  .form {
    background-color: white;
    width: 400px;
    border-radius: 8px;
    padding: 20px 40px;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
  }
  
  .title {
    font-size: 50px;
    margin-bottom: 50px;
  }
  
  .inputContainer {
    position: relative;
    height: 40px;
    width: 200%;
    margin-bottom: 17px;
  }
  
  .input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid #DADCE0;
    border-radius: 7px;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    background: none;
    z-index: 1;
  }
  
  
  .label {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 0 4px;
    background-color: white;
    color: #DADCE0;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
  }
  
  ::placeholder {
    color: transparent;
  }
  
  .submitBtn {
    display: block;
    margin-left: auto;
    padding: 15px 30px;
    border: none;
    background-color: purple;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
  }
  
  .submitBtn:hover {
    background-color: #9867C5;
    transform: translateY(-2px);
  }
  .input:focus + .label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: purple;
  }
  
  .input:not(:placeholder-shown)+ .label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
  }
  
  .input:focus {
    border: 2px solid purple;
  }
  
  .button{
  display: flex;
  }
  #log{  
  width: 300px;  
  height: 30px;  
  border: none;  
  border-radius: 17px;  
  padding-left: 7px;  
  color: rgb(0, 0, 0);  
  background-color: rgb(212, 62, 87);
  
  
  }  
  
  #log:hover {
    background-color: #9867C5;
    transform: translateY(-2px);
  }

`

const Login = () => {

  const navigate = useNavigate()
 
  const handleClick = () => {
    navigate('/Register.jsx')
  }

  return (
    <LoginWrapper>
    <div className="signupFrm">
    <div  className="wrapper">
            <br />
            <br /> <br /> <br /> <br /> <br />
            <h3 class="title">Login</h3>
            <div className='login1'>
                <div class="inputContainer">
                <input type="text" className='input' placeholder='Email' name='email'/>
            <label for="email" className='label'><i></i> Email</label>
           
            </div>

            <div class="inputContainer" >
            <input type="text" className='input' placeholder='Password' name='password' />
            <label for="password" className='label'>Password</label>
            
            </div>
            </div>
            <div className="Checkout">
     

        <input type="checkbox" />          
      <label >Check me out</label>
      </div>
      <br />
                 
           <div className='button'>
           <button idName="log">Login</button>
           <button idName="log" value="Register" onClick={ () => handleClick() }>Register</button>
           </div>
           </div>
    </div>
   

    </LoginWrapper>
  )
}

export { Login }



