import React from "react";
import ReactDOM from 'react-dom';
// import Header from './components/Header';
import App from './App'

// let myElement = document.createElement("h1")
//  myElement.textContent = "Hello 030920!"
//  document.body.appendChild(myElement)

// const reactHeader = React.createElement("h1", null, "Hello 030920, from React");
// const reactHeader = {
//     $$typeof: Symbol.for("react.element"),
//     key: null,
//     props: {
//         children: "Hello from artisinal, small-batch, hand made react element"
//     },
//     ref: null,
//     type: "h2"
// }
// console.log(reactHeader)
ReactDOM.render(<App />, document.getElementById("root"));


