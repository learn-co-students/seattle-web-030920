import React, { Component } from "react";
import Friend from './Friend'

class FriendBrowser extends Component {

  render() {
    return (
      <div>
        {this.props.friendList.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendBrowser;
