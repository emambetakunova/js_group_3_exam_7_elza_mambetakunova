import React, { Component } from 'react';
import Position from "./components/PositionsComponent/Positions"

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
      {name: 'Hamburger', count: 0},
      {name: 'Cheeseburger', count: 0},
      {name: 'Fries', count: 0},
      {name: 'Coffee', count: 0},
      {name: 'Tea', count: 0},
      {name: 'Cola', count: 0}
    ]
  };

  addElement = (index) => {
    let ingredients = [...this.state.ingredients];
    let ingredient = ingredients[index];
    ingredient.count++;
    let price = this.state.price + ingredient.price;
    ingredients[index] = ingredient;
    let usedIngredients = [...this.state.usedIngredients];
    usedIngredients.push(ingredient.name);
    this.setState({price, ingredients, usedIngredients});
  };

  removeElement = (index) => {
    let ingredients = [...this.state.ingredients];
    let ingredient = ingredients[index];
    if (ingredient.count > 0) {
      ingredient.count--;
      const indexIng = this.state.usedIngredients.findIndex(p => p.index === index);
      let allUsedIngredients = [...this.state.usedIngredients];
      allUsedIngredients.splice(indexIng, 1);
      let price = this.state.price - ingredient.price;
      ingredients[index] = ingredient;
      this.setState({price, ingredients, usedIngredients: allUsedIngredients});
    } else {
      alert('It is impossible to delete zero product');
    }

  };


  render() {
    return (
      <div className="App">
        <div className="Menu">
          {POSITIONS.map((pos, key) =>
              <Position
                  key={key}
                  image={pos.image}
                  name={pos.name}
                  price={pos.price}
                  onClick={() => this.addElement(key)}
              />
          )}
        </div>
      </div>
    );
  }
}

export default App;
