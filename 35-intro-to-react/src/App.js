import React from "react";
import Header from "./components/Header";

// const friendList = [
//     "Jack",
//     "Jill",
//     "Sarah",
//     "Adam",
//     "Sam"
// ]

class App extends React.Component {
  state = {
    friendList: ["Jack", "Jill", "Sarah", "Adam", "Sam"],
  };

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        {this.state.friendList.map((friendName) => {
          return <Header friend={friendName} />;
        //   return new Header({friend:friendName})
        })}
      </div>
    );
  }
}

export default App;
