import React, { Component } from 'react';

import Ingredient from './components/IngredientComponent/Ingredient';

import './App.css';


const INGREDIENTS = [
  {name: 'Meat', image: meatImage},
  {name: 'Cheese', image: cheeseImage},
  {name: 'Salad', image: saladImage},
  {name: 'Bacon', image: baconImage}
];


class App extends Component {

  state = {
    usedIngredients: [],
    ingredients: [
      {name: '', price: 50, count: 0},
      {name: 'Cheese', price: 20, count: 0},
      {name: 'Salad', price: 5, count: 0},
      {name: 'Bacon', price: 30, count: 0}
    ]
  };

  addElement = (key) => {
    let ingredients = [...this.state.ingredients];
    let ingredient = ingredients[key];
    ingredient.count++;
    let price = this.state.price + ingredient.price;
    ingredients[key] = ingredient;
    let usedIngredients = [...this.state.usedIngredients];
    usedIngredients.push(ingredient.name);
    this.setState({price, ingredients, usedIngredients});
  };

  removeElement = (key) => {
    let ingredients = [...this.state.ingredients];
    let ingredient = ingredients[key];
    if (ingredient.count > 0) {
      ingredient.count--;
      const index = this.state.usedIngredients.findIndex(p => p.key === key);
      let allUsedIngredients = [...this.state.usedIngredients];
      allUsedIngredients.splice(index, 1);
      let price = this.state.price - ingredient.price;
      ingredients[key] = ingredient;
      this.setState({price, ingredients, usedIngredients: allUsedIngredients});
    } else {
      alert('It is impossible to delete zero product');
    }

  };


  render() {
    return (
      <div className="App">
        <div className="Menu">
          {INGREDIENTS.map((ing, key) =>
              <Ingredient
                  key={key}
                  image={ing.image}
                  name={ing.name}
                  onClick={() => this.addElement(key)}
                  count={this.state.ingredients[key].count}
                  delete={() => this.removeElement(key)}
              />
          )}
        </div>
      </div>
    );
  }
}

export default App;
