import React from "react";
import "./Shapes.css";

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
        <h3 className="panel__name">İşlemler</h3>
        <button className="variable__btn" onClick={() => this.handleClick("variable")}></button>
        <button className="operation__btn" onClick={() => this.handleClick("operation")}></button>
        <button className="condition__btn" onClick={() => this.handleClick("statement")}></button>
        <button className="loop__btn" onClick={() => this.handleClick("loop")}></button>
        <button className="print__btn" onClick={() => this.handleClick("print")}></button>
      </div>
    );
  }
}

export default Shapes;