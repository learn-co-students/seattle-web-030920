import React, { Component } from "react";

class FriendForm extends Component {
  state = {
    age: 23,
    name: "",
    // id: this.props.nextId
  };

  handleChange = (e) => {
    if (e.target.value.includes("1")) {
      console.log("no 1s");
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.onAddFriend(this.state)
  }

  render() {
    return (
      <>
        <h4>New Friend {this.state.bananasq}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>New friend name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />{" "}
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FriendForm;
