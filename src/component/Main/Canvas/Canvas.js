import React from "react";
import "./Canvas.css";
import { Layer, Stage, Rect, Circle } from "react-konva";

const SHAPE_MARGIN = 20;
const RECT_SIZE = 50
const CIRCLE_SIZE = 25

function getShape(type, originX, originY, border, func = null) {
    if (type === "variable") {
        return <Rect
            x={originX}
            y={originY}
            width={RECT_SIZE}
            height={RECT_SIZE}
            fill="#ec0e33"
            key={originY}
        />;
    }
    else if (type === "print") {
        return <Circle
            x={originX + CIRCLE_SIZE}
            y={originY + CIRCLE_SIZE}
            radius={CIRCLE_SIZE}
            fill="#ff5ca8"
            key={originY}
        />;
    }
    else if (type === "operation") {
        let color;
        let width;
        console.log(border);
        if (border === "state"){
            color = "#13b913";
            width = 4;
            console.log("hello");
        }
        else if (border === "loop"){
            color = "#5555df";
            width = 4;
        }
        console.log(color, width);
        return <Rect
            x={originX - RECT_SIZE / 2}
            y={originY}
            width={RECT_SIZE * 2}
            height={RECT_SIZE}
            fill="#f7e600"
            stroke={color}
            strokeWidth={width}
            key={originY}
        />;
    }
    else if (type === "statement") {
        return <Rect
            x={originX + (RECT_SIZE / 2) / Math.pow(2, 1 / 2) + 5}
            y={originY}
            width={RECT_SIZE}
            height={RECT_SIZE}
            fill="#13b913"
            rotation={45}
            onClick={func}
            key={originY}
        />;
    }
    else if (type === "loop") {
        return <Rect
            x={originX - RECT_SIZE / 2}
            y={originY}
            width={RECT_SIZE * 2}
            height={RECT_SIZE}
            fill="#5555df"
            cornerRadius={[RECT_SIZE, RECT_SIZE, RECT_SIZE, RECT_SIZE]}
            onClick={func}
            key={originY}
        />;
    }
}

function getLength(list) {
    let len = list.length;

    for (let i of list) {
        if (i.type === "loop") {
            len += i.statements.length;
        }
        else if (i.type === "statement"){
            len += i.statements.length;
        }
    }
    return len;
}

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.state = {
            width: 0,
            height: 0,
            originX: 450,
            originY: 20,
            shapeList: []
        };
        this.handleLoopClick = this.handleLoopClick.bind(this);
        this.handleCondClick = this.handleCondClick.bind(this);
    }

    handleLoopClick() {
        this.props.onLoopClick(!this.props.loopState);
    }

    handleCondClick() {
        this.props.onCondClick(!this.props.condState);
    }

    componentDidMount() {
        this.setState({
            width: this.root.current.parentElement.offsetWidth,
            height: this.root.current.parentElement.offsetHeight
        });
    }
    componentDidUpdate(prevProps) {
        let data = this.props.data;
        let dataLen = getLength(data);
        let shapeLen = this.state.shapeList.length;
        let lastIndex = data.length - 1;
        if (dataLen > shapeLen) {
            if (data[lastIndex].type === "loop" && data[lastIndex].statements.length > 0) {
                const d = this.drawShapes(data[lastIndex].statements[data[lastIndex].statements.length - 1], "loop");
                this.setState({
                    shapeList: d.shapeList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
            else if (data[lastIndex].type === "statement" && data[lastIndex].statements.length > 0) {
                const d = this.drawShapes(data[lastIndex].statements[data[lastIndex].statements.length - 1], "state");
                this.setState({
                    shapeList: d.shapeList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
            else {
                const d = this.drawShapes(data[data.length - 1], null);
                this.setState({
                    shapeList: d.shapeList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
        }
        else if (dataLen < getLength(prevProps.data)) {
            this.setState({
                shapeList: [],
                originX: 450,
                originY: 20
            });
        }
    }
    drawShapes(data, border) {
        const shapeList = this.state.shapeList.slice();
        let originX = this.state.originX;
        let originY = this.state.originY;

        if (data.type === "loop") {
            shapeList.push(getShape(data.type, originX, originY, null, this.handleLoopClick));
        }
        else if (data.type === "statement"){
            shapeList.push(getShape(data.type, originX, originY, null, this.handleCondClick));
        }
        else {
            console.log(border);
            shapeList.push(getShape(data.type, originX, originY, border));
        }

        originY += RECT_SIZE + SHAPE_MARGIN;

        if (data.type === "statement") {
            originY += 10;
        }

        return {
            shapeList: shapeList,
            originX: originX,
            originY: originY
        };
    }
    render() {
        return (
            <div ref={this.root} className="canvas">
                <Stage width={this.state.width} height={2000}>
                    <Layer>
                        {this.state.shapeList}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;
