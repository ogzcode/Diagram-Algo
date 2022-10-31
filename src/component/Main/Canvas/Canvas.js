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
    componentDidUpdate(prevProps){
        if (this.props.data.length > this.state.shapeList.length){
            const d = this.drawShapes();
            this.setState({
                shapeList: d.shapeList,
                originX: d.originX,
                originY: d.originY
            });
        }
        else if (this.props.data.length < prevProps.data.length){
            this.setState({
                shapeList: [],
                originX: 450,
                originY: 20
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
        else if (data.type === "operation"){
            shape = (
                <Rect
                    x={originX - RECT_SIZE / 2}
                    y={originY}
                    width={RECT_SIZE * 2}
                    height={RECT_SIZE}
                    fill="#f7e600"
                    key={originY}
                />
            );
        }
        else if (data.type === "statement"){
            shape = (
                <Rect
                    x={originX + (RECT_SIZE / 2) / Math.pow(2, 1/2) + 5}
                    y={originY}
                    width={RECT_SIZE}
                    height={RECT_SIZE}
                    fill="#13b913"
                    rotation={45}
                    key={originY}
                />
            );
        }
        shapeList.push(shape);
        originY += RECT_SIZE + SHAPE_MARGIN;

        if (data.type === "statement"){
            originY += 10;
        }

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
