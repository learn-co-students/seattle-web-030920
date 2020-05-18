import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: [],
    nextId: 1
  };

  addFood = itemOfFood => {
    this.setState({
      plateFood: [ ...this.state.plateFood, {...itemOfFood, id:this.state.nextId} ],
      nextId: this.state.nextId + 1
    });
  }

  eatFood = itemOfFood => {
    this.setState(prev => {
      return {
        plateFood: prev.plateFood.filter(food => {
          return food.id !== itemOfFood.id
        })
      }
    })
  }

  //TO ADD A FOOD
  //callback with some indentifying param +
  //onCLick
  //some kinf of setState +

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet buffetFood={this.state.buffetFood} onAddFood={this.addFood} />
        <Plate plateFood={this.state.plateFood} onEatFood={this.eatFood}/>
      </div>
    );
  }
}

export default App;
