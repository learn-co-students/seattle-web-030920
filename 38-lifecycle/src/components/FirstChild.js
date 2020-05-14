import React from "react";

class FirstChild extends React.PureComponent {
  constructor() {
    console.log("%cFirst Child Constructed", "color:green;");
    super();
    this.state = {
      information: true,
    };
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.myValue%10 === 0;
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }

  componentDidMount() {
    console.log("%cFirst Child Mounted", "color:green;");
  }

  render() {
    console.log("%cFirst Child RENDERED", "color:green;");

    return (
      <div>
        <h2>FIRST CHILD</h2>
        <h3>{this.props.myValue}</h3>
      </div>
    );
  }
}

export default FirstChild;
