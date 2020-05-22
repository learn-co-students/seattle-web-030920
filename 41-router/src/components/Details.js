import React from "react";
import { Redirect } from 'react-router-dom' 

class Details extends React.Component {

getGlasses = () => {
    const id = this.props.match.params.id;
    let foundGlasses ={image: "", style: "", maker: ""}
    for (let glasses of this.props.glasses) {
        if (glasses.id == id) {
            foundGlasses = glasses
        }
    }
    return foundGlasses
}

  render() {
      const { image, style, maker, id } = this.getGlasses();
    if (id === 3) {
      return <Redirect to="/" />
    }
    return (
      <>
        {" "}
        <img className="card-img-top" src={image} />
        <div classNamer="card-body">
          <h3>{style}</h3>
          <h4>{maker}</h4>
        </div>
      </>
    );
  }
}

export default Details;
