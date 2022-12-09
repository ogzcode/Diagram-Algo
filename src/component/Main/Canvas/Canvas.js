import React from "react";
import "./Canvas.css";
import { Layer, Stage, Rect, Circle, Line, Text } from "react-konva";

const SHAPE_MARGIN = 20;
const RECT_SIZE = 50
const CIRCLE_SIZE = 25

function getShape(type, originX, originY, border, func = null, activeState = null) {
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
        if (border === "state") {
            color = "#13b913";
            width = 4;
        }
        else if (border === "loop") {
            color = "#5555df";
            width = 4;
        }
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
            x={originX + (RECT_SIZE / 2) / Math.pow(2, 1 / 2) + 8}
            y={originY - 2}
            width={RECT_SIZE}
            height={RECT_SIZE}
            fill="#13b913"
            rotation={45}
            stroke={activeState === "cond" ? "black" : ""}
            strokeWidth={activeState === "cond" ? 2 : 0}
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
            stroke={activeState === "loop" ? "black" : ""}
            strokeWidth={activeState === "loop" ? 2 : 0}
            onClick={func}
            key={originY}
        />;
    }
}

function getText(data, originX, originY) {
    const text = {
        "print": <Text
            x={originX + CIRCLE_SIZE / 2}
            y={originY + CIRCLE_SIZE - CIRCLE_SIZE / 4}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
            text={data.value}
            fill="black"
            fontSize={14}
            align="center"
        />,
        "variable": <Text
            x={originX}
            y={originY + RECT_SIZE / 3}
            width={RECT_SIZE}
            height={RECT_SIZE}
            text={`${data.name}=${data.value}`}
            fill="black"
            fontSize={14}
            align="center"
        />,
        "operation": <Text
            x={originX - RECT_SIZE / 2}
            y={originY + RECT_SIZE / 3}
            width={RECT_SIZE * 2}
            height={RECT_SIZE}
            text={`${data.result}=${data.prosses}`}
            fill="black"
            fontSize={14}
            align="center"
        />,
        "loop": <Text
            x={originX}
            y={originY + RECT_SIZE / 3}
            width={RECT_SIZE}
            height={RECT_SIZE}
            text={`i=${data.value}`}
            fill="white"
            fontSize={14}
            align="black"
        />,
        "statement": <Text
            x={originX}
            y={originY + RECT_SIZE / 2}
            width={RECT_SIZE}
            height={RECT_SIZE / 2}
            text={`${data.control}`}
            fill="black"
            fontSize={14}
            align="center"
        />
    };
    
    return text[data.type];
}

function getLength(list) {
    let len = list.length;

    for (let i of list) {
        if (i.type === "loop") {
            len += i.statements.length;
        }
        else if (i.type === "statement") {
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
            shapeList: [],
            lineList: [],
            textList: []
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
                let elem = data[lastIndex].statements[data[lastIndex].statements.length - 1];
                const d = this.drawShapes(elem, "loop");
                this.setState({
                    shapeList: d.shapeList,
                    lineList: d.lineList,
                    textList: d.textList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
            else if (data[lastIndex].type === "statement" && data[lastIndex].statements.length > 0) {
                let elem = data[lastIndex].statements[data[lastIndex].statements.length - 1];
                const d = this.drawShapes(elem, "state");
                this.setState({
                    shapeList: d.shapeList,
                    lineList: d.lineList,
                    textList: d.textList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
            else {
                const d = this.drawShapes(data[data.length - 1], null);
                this.setState({
                    shapeList: d.shapeList,
                    lineList: d.lineList,
                    textList: d.textList,
                    originX: d.originX,
                    originY: d.originY
                });
            }
        }
        else if (dataLen < getLength(prevProps.data)) {
            this.setState({
                shapeList: [],
                lineList: [],
                textList: [],
                originX: 450,
                originY: 20
            });
        }
    }
    drawShapes(data, border) {
        const shapeList = this.state.shapeList.slice();
        const lineList = this.state.lineList.slice();
        const textList = this.state.textList.slice();
        let originX = this.state.originX;
        let originY = this.state.originY;

        if (data.type === "loop") {
            shapeList.push(getShape(data.type, originX, originY, null, this.handleLoopClick));
        }
        else if (data.type === "statement") {
            shapeList.push(getShape(data.type, originX, originY, null, this.handleCondClick));
        }
        else {
            shapeList.push(getShape(data.type, originX, originY, border));
        }

        if (shapeList.length > 1) {
            lineList.push(
                <Line
                    points={[originX + RECT_SIZE / 2, originY - SHAPE_MARGIN, originX + RECT_SIZE / 2, originY]}
                    stroke="black"
                    strokeWidth={3}
                    key={lineList.length}
                />
            );
        }

        textList.push(getText(data, originX, originY));

        originY += RECT_SIZE + SHAPE_MARGIN;

        if (data.type === "statement") {
            originY += 10;
        }

        return {
            shapeList: shapeList,
            lineList: lineList,
            textList: textList,
            originX: originX,
            originY: originY
        };
    }
    isActive() {
        if (this.props.loopState) {
            return (
                <Circle
                    x={20}
                    y={20}
                    radius={10}
                    fill="#5555df"
                />
            );
        }
        else if (this.props.condState) {
            return (
                <Circle
                    x={20}
                    y={20}
                    radius={10}
                    fill="#13b913"
                />
            );
        }
    }
    render() {
        return (
            <div ref={this.root} className="canvas">
                <Stage width={this.state.width} height={2000}>
                    <Layer>
                        {this.state.lineList}
                    </Layer>
                    <Layer>
                        {this.state.shapeList}
                    </Layer>
                    <Layer>
                        {this.state.textList}
                    </Layer>
                    <Layer>
                        {this.isActive()}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;
