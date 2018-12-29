import React, {Component} from 'react';
import Positions from "./components/PositionsComponent/Positions"
import Order from "./components/OrderComponent/Order"

import hamburgerImage from './assets/hamburger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';

import './App.css';


const POSITIONS = [
    {name: 'Hamburger', image: hamburgerImage, price: 110},
    {name: 'Cheeseburger', image: cheeseburgerImage, price: 110},
    {name: 'Fries', image: friesImage, price: 45},
    {name: 'Coffee', image: coffeeImage, price: 70},
    {name: 'Tea', image: teaImage, price: 20},
    {name: 'Cola', image: colaImage, price: 35}
];


class App extends Component {

    state = {
        totalPrice: 0,
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
        console.log(position);
        let totalPrice = position.price + this.state.totalPrice;
        positions[index] = position;
        let usedPositions = [...this.state.usedPositions];

        if (!usedPositions.includes(position)) {
            usedPositions.push(position);
        }
        console.log(usedPositions)
        this.setState({totalPrice, positions, usedPositions});
    };

    removeElement = (index) => {
        let positions = [...this.state.positions];
        let position = positions[index];
        if (position.count > 0) {
            position.count--;
            const indexIng = this.state.usedPositions.findIndex(p => p.index === index);
            let allUsedPositions = [...this.state.usedPositions];
            allUsedPositions.splice(indexIng, 1);
            let totalPrice = position.price - this.state.totalPrice;;
            positions[index] = position;
            this.setState({totalPrice, positions, usedIngredients: allUsedPositions});
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
                        usedPositions = {this.state.usedPositions}
                        total={this.state.totalPrice}
                        // remove={() => this.removeElement(key)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
