import React from "react";
import styled from 'styled-components';

const WishlistWrapper = styled.div`
margin-top: 15vh;
`

function Wishlist() {
    return(
        <WishlistWrapper>
            <h1>This is Wishlist Component</h1>
        </WishlistWrapper>
    )
}

export { Wishlist }