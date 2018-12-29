import React, {Component} from 'react';
import Positions from "./components/PositionsComponent/Positions"
import Order from "./components/OrderComponent/Order"

import './App.css';


const POSITIONS = [
    {name: 'Hamburger', price: 110},
    {name: 'Cheeseburger', price: 120},
    {name: 'Fries', price: 45},
    {name: 'Coffee', price: 70},
    {name: 'Tea', price: 20},
    {name: 'Cola', price: 35}
];


class App extends Component {

    state = {
        usedPositions: [],
        positions: [
            {name: 'Hamburger', count: 0, price: 110},
            {name: 'Cheeseburger', count: 0, price: 120},
            {name: 'Fries', count: 0, price: 45},
            {name: 'Coffee', count: 0, price: 70},
            {name: 'Tea', count: 0, price: 20},
            {name: 'Cola', count: 0, price: 35}
        ]
    };

    addElement = (index) => {
        let positions = [...this.state.positions];
        let position = positions[index];
        position.count++;
        let price = this.state.price + position.price;
        positions[index] = position;
        let usedPositions = [...this.state.usedPositions];
        usedPositions.push(position.name, position.price);
        console.log(usedPositions);
        this.setState({price, positions, usedPositions});
    };

    removeElement = (index) => {
        let positions = [...this.state.positions];
        let position = positions[index];
        if (position.count > 0) {
            position.count--;
            const indexIng = this.state.usedPositions.findIndex(p => p.index === index);
            let allUsedPositions = [...this.state.usedPositions];
            allUsedPositions.splice(indexIng, 1);
            let price = this.state.price - position.price;
            positions[index] = position;
            this.setState({price, positions, usedIngredients: allUsedPositions});
        } else {
            alert('It is impossible to delete zero product');
        }

    };


    render() {
        return (
            <div className="App">
                <div className="menu">
                    {POSITIONS.map((pos, key) =>
                        <Positions
                            key={key}
                            image={pos.image}
                            name={pos.name}
                            price={pos.price}
                            onClick={() => this.addElement(key)}
                        />
                    )}
                </div>
                <div className="order">
                    <Order
                        count={this.state.count}
                        usedIngredients={this.state.usedPositions}
                    />

                </div>

            </div>
        );
    }
}

export default App;
