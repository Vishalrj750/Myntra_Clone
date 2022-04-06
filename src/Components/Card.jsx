import React from "react";

function Card({ img, title, description, price }) {
    return(
        <div className="main">
            <div className="img-div">
                <img src={ img } alt="" className="img" />
            </div>
            <div className="other-details">
                <h4 className="title">{ title }</h4>
                <p className="description">{ description }</p>
                <p className="price">{ price }</p>
            </div>
        </div>
    )
}

export { Card }