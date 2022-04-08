import React from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux"
import{ addToBag, addToTotal, deleteFromWishlist}from "../Redux/action.js"
import { useSelector } from 'react-redux'


const WishlistCard = ({item}) => {
    const total = useSelector((state) => state.total)
    
    const {title,price,images}=item
    const dispatch=useDispatch()

    const handleClick=()=>{
        dispatch(addToBag(item))
        dispatch(deleteFromWishlist(item.id))
        dispatch(addToTotal( total + item.price ))
    }

    const removeClick=()=>{
        dispatch(deleteFromWishlist(item.id))
    }
    return (
        <CardDiv>
            <div className="img">
                <img src={images.image1} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6um2iMcZHnVRLthLpnB4UwrmhFf9LUzlzA&usqp=CAU" onClick={removeClick}/>
            </div>
            <div className="details">
                <h5>{title}</h5>
                <p>{price}</p>
                <Button onClick={handleClick}>MOVE TO BAG</Button>
                
            </div>
        </CardDiv>
    )
}

export default WishlistCard


const CardDiv = styled.div`
    height:280px;
    width:200px;
    border:1px solid black;
    position:relative;
    img{
        width: 100%;
        // height: 220px;
        // object-fit: contain;
        position:relative;
    }
    img:nth-child(2){
        width:10%;
        position:absolute;
        right:0;
        opacity:0.5;
    }
    .details {
        position:absolute;
        bottom:0;
        // top:;
    width:100%;


        display: flex;
        background:white;
        flex-direction: column;
        // align-items: start;
        // padding-left:10px;
        h5 {
            font-size: 17px;
            padding:0;
            margin:0;
            max-height:20px;
         overflow:hidden;
        }
        p {
            font-size: 20px;
            padding:0;
            margin:0;
            text-align:center;
        }
        
    }
`

const Button =styled.button`
background-color:#ff3f6c;

color:white;
font-size:15px;
padding:6px;
width:100%;
// object-fit:contain;
// align-item:right;

`