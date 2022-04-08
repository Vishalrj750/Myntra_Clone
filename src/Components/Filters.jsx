import React from 'react'
import styled from "styled-components"
import '../App.css';


const Filters = () => {
    return (
        <>
            <br/>
            <Div>
            <h4>FILTERS</h4>
            {/* <hr/> */}
                <Div2>
                <P1>CATEGORIES</P1>
                <label>        
                    <Check></Check>
                    <span>Tshirts</span>
                </label>

                <label>        

                    <Check></Check>
                    <span> Lounge Tshirts</span>
                </label>
                </Div2>
                {/* <hr/> */}
                <Div2>

                <P1>BRAND</P1>
                <label>        
                    <Check></Check>
                    <span>Roadster</span>
                    
                </label>
                <label>        
                    <Check></Check>
                    <span>Puma</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>HRX by Hrithik Roshan</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>Wrogn</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>Spykar</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>Zara</span>
                </label>
                <P2>+ 500 more</P2>
                </Div2>

                {/* <hr/> */}
                <Div2>

                <P1>PRICE</P1>
                <label>        
                    <Check></Check>
                    <span>Rs 159 to Rs 3469</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>Rs 3469 to Rs 6779</span>
                </label>
                <label>        
                    <Check></Check>
                    <span>Rs 6779 to Rs 10089</span>
                </label>
                </Div2>

            </Div>
        </>
    )
}

export default Filters

const Div = styled.div`
border:1px solid #cecece;
width:15vw;
display:flex;
flex-direction:column;
padding:0;
padding-left:20px;
margin:0;
margin-left:10px;
position:fixed;
z-index:1;
`
const Div2=styled.div`

margin-top:10px;
margin-bottom:10px;
display:flex;
flex-direction:column;

`
const P1 = styled.p`
font-size:14px;
`
const P2 = styled.p`
height:10px;
margin:0;
`

const Check = styled.input.attrs({ type: 'checkbox' })`
`

