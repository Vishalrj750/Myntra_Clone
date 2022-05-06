import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'



const CardWrapper = styled.div`
.maincheckout{
    
    display:flex;
flex-direction:column;
margin:155px 570px;
    background-color: aliceblue;
    


`
const Checkout = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/thankyou')
  }

  return (
    
    <Div className='maincheckout'>
        <h4>CREDIT/DEBIT CARD</h4>
        <Input type="text" placeholder="Card Number"/>
        <Input type="text" placeholder="Name on Card"/>
        <Div2>
        <Input2 type="text" placeholder="Valid Thru"/>
        <Input3 type="text" placeholder="CVV"/>
        </Div2>
            <label>
        <Check/>
        <span>Save this Card for faster payments</span>
        </label>
        <Button onClick={ () => handleClick() } >PAY NOW</Button>
    </Div>
  )
}

export { Checkout }

const Div=styled.div`
display:flex;
flex-direction:column;
 margin:155px 570px;
background-color: aliceblue;
`

const Div2=styled.div`
display:flex;
width:350px;
justify-content:space-around;
margin:15px 0;

`
const Input=styled.input`
width:350px;
height:30px;
margin:15px 0;
`

const Input2=styled.input`
width:200px;
height:30px;

`

const Input3=styled.input`
width:100px;
height:30px;

`

const Check = styled.input.attrs({ type: 'checkbox' })`
margin-left:20px;
`

const Button=styled.button`
height:30px;
width:350px;
background-color:#ff3f6c;
color:white;
margin-top:15px;


`