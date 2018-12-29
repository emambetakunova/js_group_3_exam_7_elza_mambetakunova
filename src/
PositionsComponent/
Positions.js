import React from "react";
import "./Ingredient.css";

const Ingredient = props => {
    return (
        <div className="Ingredient">
            <div onClick={props.onClick}>
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
            </div>
            <span>{props.count}</span>
            <button onClick={props.delete}>X</button>
        </div>
    )

};

export default Ingredient;