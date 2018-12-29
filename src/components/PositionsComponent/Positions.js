import React from "react";
import "./Positions.css";

const Positions = props => {
    return (
        <div className="position">
            <div onClick={props.onClick}>
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
                <p>Price: {props.price}</p>
            </div>
        </div>
    )

};

export default Positions;
