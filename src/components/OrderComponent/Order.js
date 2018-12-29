import React from "react";
import "./Order.css";

const Order = props => {
    return (
        <div className="order">
            {props.usedIngredients.map((ing, key) => {
                return (
                    <div key={key}>{ing}</div>
                )
            })}
            <button onClick={props.remove}>X</button>
            <p>{props.count}</p>
            <p>Total price: {props.total}</p>
        </div>
    )

};

export default Order;