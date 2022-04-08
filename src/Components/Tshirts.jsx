import React from "react";
import styled from 'styled-components';
import { Card } from './Card'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToTshirt } from "../Redux/action";
import Filters from "./Filters";



const TshirtWrapper = styled.div`
display:flex;

.main{
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5vw;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 95px;
    margin-left:17vw;
}
`

function Tshirts() {
    const tshirt = useSelector((state) => state.tshirt)
    const dispatch = useDispatch()

    React.useEffect(() => {
        getData()

    }, [])

    const getData = () => {
        fetch(`http://localhost:3001/items`)
        .then((res) => res.json())
        .then((res) => dispatch( addToTshirt( res ) ))
        .catch((err) => console.log(err))
    }

    // console.log(`data - ${ data }`)

    

    return(
        
        <TshirtWrapper>
            <div className="filt">
                <Filters/>
            </div>
            <div className="main">
            { tshirt.map((item) => <Card key={ item.id } img={ item.images.image1 } title={ item.title } description={ item.description } price={ item.price } id={ item.id } /> ) }
            </div>
        </TshirtWrapper>
    )
}

export { Tshirts }