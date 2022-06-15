import React from 'react'
import styled from "styled-components"
import '../App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToTshirt } from '../Redux/action';



const Filters = () => {

    const tshirt = useSelector((state) => state.tshirt)
    const dispatch = useDispatch()
    let filterData;

    const filterPrice = (e) => {
        if(e.target.checked) {
            filterData = tshirt.filter((item) => item.price >= 159 && item.price <= 3469)
            dispatch( addToTshirt( filterData ) )
        }
        else{
            fetch(`https://myntra-backend-clone.herokuapp.com/products`)
        .then((res) => res.json())
        .then((res) => dispatch( addToTshirt( res ) ))
        .catch((err) => console.log(err))
        }
    }

    const filterWrogn = (e) => {
        if(e.target.checked) {
            filterData = tshirt.filter((item) => item.brand === "WROGN")
            dispatch( addToTshirt( filterData ) )
        }
        else{
            fetch(`https://myntra-backend-clone.herokuapp.com/products`)
        .then((res) => res.json())
        .then((res) => dispatch( addToTshirt( res ) ))
        .catch((err) => console.log(err))
        }
    }

    const filterRoadster = (e) => {
        if(e.target.checked){
            filterData = tshirt.filter((item) => item.brand === "Roadster")
            dispatch( addToTshirt( filterData ) )
        }
        else{
            fetch(`https://myntra-backend-clone.herokuapp.com/products`)
        .then((res) => res.json())
        .then((res) => dispatch( addToTshirt( res ) ))
        .catch((err) => console.log(err))
        }
    }

    return (
        <div className='filter-main'>
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
                    <Check onChange={ (e) => filterRoadster(e) } ></Check>
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
                    <Check onChange={ (e) => filterWrogn(e) } ></Check>
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
                    <Check onChange={ (e) => filterPrice(e) } ></Check>
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
        </div>
    )
}

export default Filters

const Div = styled.div`
border:1px solid #cecece;
width:14.5vw;
display:flex;
flex-direction:column;
padding-left:20px;
margin-left:10px;
position:fixed;
margin-top: 75px;
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

