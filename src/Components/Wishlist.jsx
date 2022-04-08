import React from "react";
import styled from 'styled-components';
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
        </WishlistWrapper>
    )
}

export { Wishlist }