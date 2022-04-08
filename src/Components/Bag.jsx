import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BagCard } from "./BagCard";
import { useNavigate } from "react-router-dom";

const BagWrapper = styled.div`
margin-top: 90px;
display: flex;
background-color: aliceblue;
.left-div{
    flex: 1;
}
.right-div{
    flex: 1;
    text-align: left;
    padding-left: 10%;
}
.price-details{
    color: red;
}
.price-details-right-div{
display: flex;
gap: 20%;
text-align: left;
}
.price-details-p2{
    font-weight: bold;
}
.apply-coupon{
    color: red;
    cursor: pointer;
}
.grand-total{
    display: flex;
    gap: 10%;
}
hr{
    border: 1px solid black;
    
}
.place-order-btn-div{
    text-align: center;
}
.place-order-btn{
    font-size: 18px;
    font-weight: weight;
    color: white;
    background-color: #ff3f6c;
    padding: 6px;
    width: 50%;
}
`

function Bag() {
    const bag = useSelector((state) => state.bag)
    const total = useSelector((state) => state.total)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/payment')
    }

    return(
        <BagWrapper>
            <div className="left-div">
                { bag.map((item) => <BagCard key={item.id} img={ item.images.image1 } title={ item.title } description={ item.description } price={ item.price } id={ item.id } /> ) }
            </div>
            <div className="right-div">
                <div className="price-details-div">
                    <h3 className="price-details">PRICE DETAILS</h3>
                </div>
                <div className="price-details-right-div">
                    <div className="price-details-left-div1">
                        <p className="price-details-p1">Total MRP</p>
                        <p className="price-details-p1">Apply Coupon</p>
                        <p className="price-details-p1">Delivery Charge</p>
                    </div>
                    <div className="price-details-right-div1">
                        <p className="price-details-p2">{ total }</p>
                        <p className="apply-coupon">Coupon Code</p>
                        <p className="price-details-p2">-99</p>
                    </div>
                </div>
                <hr />
                <div className="grand-total">
                    <h2 className="tital-amount-left">TOTAL AMOUNT</h2>
                    <h2 className="total-amount-right">{ total }</h2>
                </div>
                <div className="place-order-btn-div">
                    <button className="place-order-btn" onClick={ () => handleClick() } >PLACE ORDER</button>
                </div>
            </div>
        </BagWrapper>
    )
}

export { Bag }