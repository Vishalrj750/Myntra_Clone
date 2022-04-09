import React from "react";
import styled from 'styled-components';
import WishlistCard from "./WishlistCard";
import {useSelector} from "react-redux"

const WishlistWrapper = styled.div`
margin-top: 95px;;
// display:flex;
// justify-content:space-evenly;
// flex-wrap:wrap;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 5%;
margin-left: 5%;
`

function Wishlist() {

    

    const wish=useSelector(state=>state.wishlist)
    return(
        <WishlistWrapper>
            {wish.map((e)=><WishlistCard item={e}/>)}
            {/* <WishlistCard/> */}
        </WishlistWrapper>
    )
}

export { Wishlist }