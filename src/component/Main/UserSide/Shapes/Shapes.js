import React from "react";
import "./Shapes.css";

//ref kullanımı
/*
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();  }
  render() {
    return <div ref={this.myRef} />;  }
}
*/

class Shapes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.onClick(type);
  }
  render() {
    return (
      <div className="shapes">
        <button className="rect" onClick={() => this.handleClick("variable")}></button>
        <button className="aritc" onClick={() => this.handleClick("operation")}></button>
        <button className="if" onClick={() => this.handleClick("statement")}></button>
        <button className="cycle" onClick={() => this.handleClick("loop")}></button>
        <button className="print" onClick={() => this.handleClick("print")}></button>
      </div>
    );
  }
}

export default Shapes;