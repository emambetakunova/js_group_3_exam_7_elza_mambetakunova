import React from "react";
import "./Positions.css";

const Position = props => {
    return (
        <div className="Ingredient">
            <div onClick={props.onClick}>
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )

};

export default Position;