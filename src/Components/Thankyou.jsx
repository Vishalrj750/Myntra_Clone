import React from "react";
import styled from "styled-components";

const ThankyouWrapper = styled.div`
color: blue;
margin-top: 250px;
font-size: 50px;
`

function Thankyou() {
    return(
        <ThankyouWrapper>
            <h1>Thankyou for Shopping</h1>
        </ThankyouWrapper>
    )
}

export { Thankyou }