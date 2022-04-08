import React from "react";
import styled from "styled-components";

const BagCardWrapper = styled.div`
.card-main-div{
    width: 50vw;
    display: flex;
    padding-left: 25px;
    background-color: aliceblue;
}
.card-img-div{
    width: 120px;
}
.card-img{
    width: 100%;
}
.card-details{
    margin-left: 25px;
    text-align: left;
}
.card-description{
    font-size: 15px;
}
.card-price{
    font-weight: bold;
}
.remove{
    font-size: 12px;
    color: white;
    padding: 4px;
    background-color: #ff3f6c;
}
`


function BagCard({ img, title, description, price, id }) {

    const handleClick = (id) => {

    }
    return(
        <BagCardWrapper>
            <div className="card-main-div">
                <div className="card-img-div">
                    <img src={ img } alt="" className="card-img" />
                </div>
                <div className="card-details">
                    <h4 className="card-title">{ title }</h4>
                    <p className="card-description">{ description }</p>
                    <p className="card-price">Rs.{ price }</p>
                    <button className="remove" onClick={ () => handleClick(id) } >Remove</button>
                </div>
            </div>
        </BagCardWrapper>
    )
}

export { BagCard }