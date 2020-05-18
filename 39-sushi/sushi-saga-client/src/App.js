import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    // App.displayName = "Ye Ol' App";
    this.state = {
      sushi: [],
      currentSushi: [],
      emptyPlates: [],
      wallet: 100,
    };
  }

  componentDidMount() {
    this.fetchSushi();
  }

  getNextSushi = () => {
    this.setState((prev) => {
      return {
        sushi: [...prev.sushi.slice(4), ...prev.currentSushi.filter(sushi=>!this.isSushiEaten(sushi))],
        currentSushi: prev.sushi.slice(0, 4),
      };
    });
  };

  isSushiEaten = (sushi) => {
    return this.state.emptyPlates.includes(sushi);
  };

  fetchSushi = () => {
    fetch(API)
      .then((res) => res.json())
      .then((allSushi) => {
        this.setState(
          {
            sushi: allSushi,
          },
          this.getNextSushi
        );
      });
  };

  eatSushi = (eatenSushi) => {
    if (eatenSushi.price <= this.state.wallet && !this.isSushiEaten(eatenSushi))
      this.setState((prev) => {
        return {
          emptyPlates: [...prev.emptyPlates, eatenSushi],
          wallet: prev.wallet - eatenSushi.price,
        };
      });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          onEatSushi={this.eatSushi}
          currentSushi={this.state.currentSushi}
          onGetNextSushi={this.getNextSushi}
          isSushiEaten={this.isSushiEaten}
        />
        <Table
          wallet={this.state.wallet}
          emptyPlates={this.state.emptyPlates}
        />
      </div>
    );
  }
}

export default App;
