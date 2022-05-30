import React from 'react'
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {toggleAuth} from '../Redux/action';

const LoginWrapper = styled.div`

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
  background-color: aliceblue;
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
  width: 90%;
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
  background-color: aliceblue;
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

// body {
//     box-sizing: border-box;
//     margin: auto;
//     margin-top: 30px;
  
//     padding: 20px;
//     background-color: white;
//     font-family: "lato", sans-serif;
//   }
  
//   .signupFrm {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
    
//   }
  
  
//   .form {
//     background-color: aliceblue;
//     width: 400px;
//     border-radius: 8px;
//     padding: 20px 40px;
//     box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
//   }
  
//   .title {
//     font-size: 50px;
//     margin-bottom: 50px;
//   }
  
//   .inputContainer {
//     position: relative;
//     height: 40px;
//     width: 90%;
//     margin-bottom: 17px;
   
//   }
  
//   .input {
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     height: 100%;
//     width: 100%;
//     border: 1px solid #DADCE0;
//     border-radius: 7px;
//     font-size: 16px;
//     padding: 0 20px;
//     outline: none;
//     background: none;
//     z-index: 1;
//   }
   
  
//   .label {
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     padding: 0 4px;
//     background-color: aliceblue;
//     color: #DADCE0;
//     font-size: 16px;
//     transition: 0.5s;
//     z-index: 0;
//   }
  
//   ::placeholder {
//     color: transparent;
//   }
  
//   .submitBtn {
//     display: block;
//     margin-left: auto;
//     padding: 15px 30px;
//     border: none;
//     background-color: purple;
//     color: white;
//     border-radius: 6px;
//     cursor: pointer;
//     font-size: 16px;
//     margin-top: 30px;
//   }
  
//   .submitBtn:hover {
//     background-color: #9867C5;
//     transform: translateY(-2px);
//   }
//   .input:focus + .label {
//     top: -7px;
//     left: 3px;
//     z-index: 10;
//     font-size: 14px;
//     font-weight: 600;
//     color: purple;
//   }
  
//   .input:not(:placeholder-shown)+ .label {
//     top: -7px;
//     left: 3px;
//     z-index: 10;
//     font-size: 14px;
//     font-weight: 600;
//   }
  
//   .input:focus {
//     border: 2px solid purple;
//   }
  
//   .button{
//   display: flex;
//   }
//   #log{  
//   width: 300px;  
//   height: 30px;  
//   border: none;  
//   border-radius: 17px;  
//   padding-left: 7px;  
//   color: rgb(0, 0, 0);  
//   background-color: rgb(212, 62, 87);
  
  
//   }  
  
//   #log:hover {
//     background-color: #9867C5;
//     transform: translateY(-2px);
//   }
  
`

const LoginTry = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth)

  const [formDetails, setFormDetails] = React.useState({email: "", password: ""})

    const {email, password} = formDetails;

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleClickLogin = () => {
        fetch(`http://localhost:9008/login`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => res.json()).then((res) => {
            dispatch(toggleAuth(res.status));
            isAuth ? navigate('/wishlist') : navigate('/register'); 
        }).catch((err) => console.log(err))
    }

  const navigate = useNavigate()
 
  const handleClick = () => {
    navigate('/register')
  }

  return (
    <LoginWrapper>
    <div className="signupFrm">

<div className="wrapper">
  <div className="form">
  
   <h3 className="title">Login</h3>

  
  <div className="inputContainer">
  <input name="email" type="email" className="input"  aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange} />
  <label for="exampleInputEmail1" className="label">Email address</label>
  
</div>
  
  <div className="inputContainer">
    
    <input type="password" className="input"  placeholder="Password" name="password" value={password} onChange={handleChange} />
    <label for="inputPassword4" className="label">Password</label>
</div>

  <div className="inputContainer">
      <label class="form-check-label"  className="label" for="gridCheck">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
   
      Check me out

      </label>
    
    
    </div>
    <div className='button'>
           <button id='log' onClick={handleClickLogin} >Login</button>
           <button id='log' value="Register" onClick={ () => handleClick() }>Register</button>
           </div>
 
           </div>

  </div>
</div>
   

    </LoginWrapper>
  )
}

export { LoginTry }