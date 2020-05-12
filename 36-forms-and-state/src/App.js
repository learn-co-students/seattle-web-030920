import React from "react";
import FriendBrowser from "./components/FriendBrowser";
import FriendForm from "./components/FriendForm";

class App extends React.Component {
  state = {
    friendList: [
      { id: 1, name: "tanner", age: 30 },
      { id: 2, name: "connie", age: 34 },
    ],
  };

  numberOfFriends = () => this.state.friendList.length;

  addFriend = (newFriend) => {
    this.setState((prevState) => {
      return {
        friendList: [
          ...prevState.friendList,
          { ...newFriend, id: prevState.friendList.length + 1 },
          //   newFriend,
        ],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <h5>You have {this.numberOfFriends()} friends</h5>
        <FriendForm onAddFriend={this.addFriend} />
        <FriendBrowser friendList={this.state.friendList} />
      </div>
    );
  }
}

export default App;
