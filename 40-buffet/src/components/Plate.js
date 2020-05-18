import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {

  renderFood = () => {
    const { plateFood, onEatFood } = this.props 
    return plateFood.map((food) => {
      return <Food food={food} onSelectFood={onEatFood} key={food.id}/>;
    })
  }

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.renderFood()}</div>
      </div>
    );
  }
}

export default Plate;
