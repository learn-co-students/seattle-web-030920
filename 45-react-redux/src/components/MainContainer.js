import React from 'react';
import Bowies from './Bowies';


class MainContainer extends React.Component {

   
    render(){
     
        return(
            <div>
                <Bowies increaseVote={this.props.increaseVote} decreaseVote={this.props.decreaseVote} bowielist={this.props.bowielist}  /> 
                <h1>THANKS FOR VOTING</h1>
            </div>
        )
    }
}


export default MainContainer;