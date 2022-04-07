import React from "react";
import styled from 'styled-components';
<<<<<<< HEAD
import WishlistCard from "./WishlistCard";
import {useSelector} from "react-redux"

const WishlistWrapper = styled.div`
margin-top: 15vh;
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
`

function Wishlist() {

    const wish=useSelector(state=>state.wishlist)
    console.log(wish)
    return(
        <WishlistWrapper>
            {wish.map((e)=><WishlistCard item={e}/>)}
            {/* <WishlistCard/> */}
=======

const WishlistWrapper = styled.div`
margin-top: 15vh;
`

function Wishlist() {
    return(
        <WishlistWrapper>
            <h1>This is Wishlist Component</h1>
>>>>>>> 218d1af9a6507ee622fbbe2f73208844baf05e56
        </WishlistWrapper>
    )
}

export { Wishlist }