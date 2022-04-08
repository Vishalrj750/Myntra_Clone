import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BagCard } from "./BagCard";

const BagWrapper = styled.div`
margin-top: 14vh;
`

function Bag() {
    const bag = useSelector((state) => state.bag)

    return(
        <BagWrapper>
            <div>
                { bag.map((item) => <BagCard key={item.id} img={ item.images.image1 } title={ item.title } description={ item.description } price={ item.price } /> ) }
            </div>
        </BagWrapper>
    )
}

export { Bag }