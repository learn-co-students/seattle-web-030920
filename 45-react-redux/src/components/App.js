import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import '../App.css';

class App extends Component {
  
// increaseVote = (bowieid) => {
//   let bowie = this.state.bowies[bowieid] 
//   bowie.votes++
//   console.log(bowie)
//   this.setState({bowie})
// }

// decreaseVote = (bowieid) => {
//   let bowie = this.state.bowies[bowieid] 
//   bowie.votes--
//   console.log(bowie)
//   this.setState({bowie})
// }
  
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer   />
      </div>
    );
  }
}

export default App;