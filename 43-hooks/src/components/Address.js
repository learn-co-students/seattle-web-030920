import React, { useState, useEffect } from "react";

function useFormInput(initialState) {
  const [value, setValue] = useState(initialState)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

const Address = () => {
  const name = useFormInput("Jane Doe")
  const street = useFormInput("123 Main St.");
  const city = useFormInput("Seattle");
  const state = useFormInput("WA");
  const zip = useFormInput("98101");

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <h2>{name.value}</h2>
           <h3>{street.value}</h3>
          <h4>
            {city.value}
            {", "}
            {state.value} {zip.value}
          </h4>
        </div>
      </div>
      <p>Please update your address.</p>
      <div className="container">
        <form className="form">
          <div className="form-group">
            <label>Name: </label>
            <input
              {...name}
            />
          </div>
          <div className="form-group">
            <label>Street: </label>
            <input
              {...street}
            />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input
              {...city}
            />
            <label>State: </label>
            <input
              {...state}
            />
            <label>Zip: </label>
            <input
              {...zip}
            />
          </div>
        </form>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default Address;
