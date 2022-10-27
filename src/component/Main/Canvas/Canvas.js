import React from "react";
import "./Canvas.css";
import { Layer, Stage, Rect, Circle } from "react-konva";

const SHAPE_MARGIN = 20;
const RECT_SIZE = 40
const CIRCLE_SIZE = 20

class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.root = React.createRef();
        this.state = {
            width: 0,
            height: 0,
            originX: 450,
            originY: 20,
            shapeList: []
        };
    }

    componentDidMount(){
        this.setState({
            width: this.root.current.parentElement.offsetWidth,
            height: this.root.current.parentElement.offsetHeight
        });
    }
    componentDidUpdate(){
        if (this.props.data.length > this.state.shapeList.length){
            const d = this.drawShapes();
            this.setState({
                shapeList: d.shapeList,
                originX: d.originX,
                originY: d.originY
            });
        }
    }
    drawShapes(){
        const shapeList = this.state.shapeList.slice();
        let originX = this.state.originX;
        let originY = this.state.originY;

        let data = this.props.data[this.props.data.length - 1];
        let shape = null;

        if (data.type === "variable"){
            shape = (
                <Rect
                    x={originX}
                    y={originY}
                    width={RECT_SIZE}
                    height={RECT_SIZE}
                    fill="#ec0e33"
                    key={originY}
                />
            );
        }
        else if (data.type === "print"){
            shape = (
                <Circle
                    x={originX + CIRCLE_SIZE}
                    y={originY + CIRCLE_SIZE}
                    radius={CIRCLE_SIZE}
                    fill="#ff5ca8"
                    key={originY}
                />
            );
        }
        shapeList.push(shape);
        originY += RECT_SIZE + SHAPE_MARGIN;

        return {
            shapeList: shapeList,
            originX: originX,
            originY: originY
        };
    }
    render(){
        return(
            <div ref={this.root} className="canvas">
                <Stage width={this.state.width} height={this.state.height}>
                    <Layer>
                        {this.state.shapeList}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;
