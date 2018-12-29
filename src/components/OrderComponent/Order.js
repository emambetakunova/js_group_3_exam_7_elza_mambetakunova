import React from "react";
import "./Order.css";

const Order = props => {
    return (
        <div className="order">
            {props.usedPositions.map((ing, key) => {
                return (
                    <div key={key}>
                        {ing.name}
                        {ing.count}
                        <button onClick={props.remove}>X</button>
                    </div>
                )
            })}

            <p>Total price: {props.total}</p>
        </div>
    )

};

export default Order;