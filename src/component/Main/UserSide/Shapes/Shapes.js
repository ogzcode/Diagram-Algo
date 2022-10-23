import React from "react";
import { Stage, Layer, Rect, Circle, Line, RegularPolygon } from "react-konva";
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
    this.parent = React.createRef();
    this.state = {
      width: 0,
      height: 0
    };
  }
  componentDidMount() {
    const parent = this.parent.current;
    this.setState({
      width: parent.offsetWidth,
      height: parent.offsetHeight
    });
  }
  render() {
    console.log(this.state.width, this.state.height);
    return (
      <div className="shapes" ref={this.parent}>
        {/* <Stage width={this.state.width} height={this.state.height}>
          <Layer>
            <Rect
              x={20}
              y={20}
              width={40}
              height={40}
              fill="red"
            />
            <Circle
              x={100}
              y={40}
              radius={20}
              fill="blue"            
            />
            <Rect 
              x={140}
              y={20}
              width={60}
              height={40}
              fill="yellow"
            />
            <RegularPolygon
              x={240}
              y={45}
              radius={25}
              fill="green"
              sides={3}
            />
            <RegularPolygon
              x={300}
              y={40}
              radius={20}
              sides={6}
              fill="pink"
            />
          </Layer>
        </Stage> */}
        <button className="rect"></button>
        <button className="aritc"></button>
        <button className="if"></button>
        <button className="cycle"></button>
        <button className="print"></button>
      </div>
    );
  }
}

export default Shapes;