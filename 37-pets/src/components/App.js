import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  updateFilter = newFilter => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }
 
  adoptPet = petId => {
    console.log(`App component got adoption request for pet id:${petId}`)

  //BELOW API CALL IS AN EXAMPLE, WILL NOT WORK

    // fetch("/api/pets/adopt", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "applciation/json"
    //   },
    //   body: JSON.stringify({pet_id:petId})
    // }) //API will return entire modified pet object
    // .then(res=>res.json())
    // .then(updatedPet => {
      this.setState(prevState => {
      return {pets: prevState.pets.map(pet => {
        if (petId !== pet.id) {
          return pet
        } else {
          pet.isAdopted = true;
          return pet;
          // return updatedPet;
        }
      })}
      })
    // })
  }

  fetchPets = () => {
    const { type } = this.state.filters
    fetch(`/api/pets${type==="all"?"":"?type="+type}`)
      .then((res) => res.json())
      .then((data) => this.setState({pets:data}));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFetchPets={this.fetchPets} onUpdateFilter={this.updateFilter}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
