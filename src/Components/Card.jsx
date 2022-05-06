import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToWishlist } from "../Redux/action";

const CardWrapper = styled.div`
.card-main{
    width: 15vw;
    display: flex;
    flex-direction: column;
    background-color: blue;
    box-shadow: 5px 10px 5px #cecece;
    position: relative;
}
.img-div{
    width: 15vw;
}
.img{
    width: 10%;
}
.title{
    height: 15px;
    overflow: hidden;
}
.description{
    height: 15px;
    overflow: hidden;
}
.hidden-div{
    display: none;
}
.card-main:hover .hidden-div{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 72%;
    width: 100%;
}
.hidden-div button{
    font-size: 15px;
    padding: 4px;
    font-weight: bold;
    background-color: aliceblue;
}
.maincard{
    margin:10px;
    background-color: red;
}
`

function Card({ img, title, description, price, id }) {
    const tshirt = useSelector((state) => state.tshirt)
    const wishlist = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        const newWishlist = tshirt.filter((item) => id === item.id)
        dispatch( addToWishlist( newWishlist[0] ) )
        console.log(wishlist)
    }


    return(
        <CardWrapper>
            
            <div className="card-main">
                <div className="img-div">
                    <img src={ img } alt="" className="img" />
                </div>
                <div className="other-details">
                    <h4 className="title">{ title }</h4>
                    <p className="description">{ description }</p>
                    <h4 className="price">Rs.{  price }</h4>
                </div>
                <div className="hidden-div">
                    <button onClick={ () => handleClick(id) }>WISHLIST</button>
                </div>
            </div>
            
        </CardWrapper>
    )
}

export { Card }