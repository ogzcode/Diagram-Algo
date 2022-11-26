import React from "react";
import "./Shapes.css";

class ShapeBtn extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <button 
          className={`${this.props.value}__btn`} 
          onClick={() => this.props.onClick(this.props.value)}>  
        </button>
      </div>
    );
  }
}

class Shapes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.onClick(type);
  }
  getShapeBtn(){
    return [
      ["Değişken", "variable"],
      ["İşlem", "operation"],
      ["Koşul", "statement"],
      ["Döngü", "loop"],
      ["Yazdır", "print"]
    ].map((elem, index) => <ShapeBtn name={elem[0]} value={elem[1]} onClick={this.handleClick} key={index}/>);
  }
  render() {
    return (
      <div className="shapes">
        <h3 className="panel__name">İşlemler</h3>
        <div className="btn__container">
          {this.getShapeBtn()}
        </div>
      </div>
    );
  }
}

export default Shapes;