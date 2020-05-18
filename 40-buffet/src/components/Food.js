import React, { Component } from "react";

class Food extends Component {

  handleAddFood = () => {
    const { onSelectFood, food } = this.props;
    onSelectFood(food);
  }

  render() {
    const { name, image } = this.props.food
    return (
      <div className="col col-md-2">
        <div className="card" onClick={this.handleAddFood}>
          {/* IMAGE BELOW */}
          <img className="card-img-top" src={image}/>
          <div className="card-body">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
