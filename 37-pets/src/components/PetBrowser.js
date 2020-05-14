import React from "react";
import Pet from "./Pet";

class PetBrowser extends React.Component {
  // renderPets = () => {
  //   return this.props.pets.map((pet) => {
  //     return <Pet />;
  //   });
  // };

  renderPets = () =>
    this.props.pets.map((currentPet) => (
      <Pet onAdoptPet={this.props.onAdoptPet} key={currentPet.id} pet={currentPet} />
    ));

  render() {
    return <div className="ui cards">{this.renderPets()}</div>;
  }
}

export default PetBrowser;
