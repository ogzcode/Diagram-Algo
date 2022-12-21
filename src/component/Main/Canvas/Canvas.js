import React from "react";
import "./Canvas.css";
import { Layer, Stage, Line } from "react-konva";
import getShape from "./Other/getShape";
import getActiveCircle from "./Other/getActiveCircle";
import getLength from "./Other/getLength";
import getText from "./Other/getText";

const SHAPE_MARGIN = 20;
const RECT_SIZE = 50

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
        if (dataLen > shapeLen) {
            let shape = [];
            let line = [];
            let text = [];
            let originX = this.state.originX;
            let originY = 20;
            let d = null;
            for (let i of data) {
                if (i.type === "loop" && i.statements.length > 0) {
                    d = this.drawShapes(i, null, originX, originY);

                    shape.push(d[0]);
                    line.push(d[1]);
                    text.push(d[2]);
                    originY = d[3];

                    for (let j of i.statements) {
                        if (j.type === "statement") {
                            d = this.drawShapes(j, "loop", originX, originY);
                            shape.push(d[0]);
                            line.push(d[1]);
                            text.push(d[2]);
                            originY = d[3];

                            if (j.statements.length > 0){
                                for (let elem of j.statements) {
                                    d = this.drawShapes(elem, "loop&state", originX, originY);
                                    shape.push(d[0]);
                                    line.push(d[1]);
                                    text.push(d[2]);
                                    originY = d[3];
                                }
                            }
                        }
                        else {
                            d = this.drawShapes(j, "loop", originX, originY);
                            shape.push(d[0]);
                            line.push(d[1]);
                            text.push(d[2]);
                            originY = d[3];
                        }
                    }
                }
                else if (i.type === "statement" && i.statements.length > 0) {
                    d = this.drawShapes(i, null, originX, originY);

                    shape.push(d[0]);
                    line.push(d[1]);
                    text.push(d[2]);
                    originY = d[3];

                    for (let elem of i.statements) {
                        d = this.drawShapes(elem, "state", originX, originY);
                        shape.push(d[0]);
                        line.push(d[1]);
                        text.push(d[2]);
                        originY = d[3];
                    }
                }
                else {
                    d = this.drawShapes(i, null, originX, originY);
                }
                shape.push(d[0]);
                line.push(d[1]);
                text.push(d[2]);
                originY = d[3];
            }

            this.setState({
                shapeList: shape,
                lineList: line,
                textList: text,
                originY: originY
            });

        }
        else if (dataLen < getLength(prevProps.data) || prevProps.data !== data) {
            this.setState({
                shapeList: [],
                lineList: [],
                textList: [],
                originX: 450,
                originY: 20
            });
        }
    }
    drawShapes(data, border, originX, originY) {
        let shape = null;
        let text = null;
        let line = null;

        if (data.type === "loop") {
            shape = getShape(data.type, originX, originY, null, this.handleLoopClick);
        }
        else if (data.type === "statement") {
            shape = getShape(data.type, originX, originY, border, this.handleCondClick);
        }
        else {
            shape = getShape(data.type, originX, originY, border);
        }

        if (originY > 20) {
            line =
                <Line
                    points={[originX + RECT_SIZE / 2, originY - SHAPE_MARGIN, originX + RECT_SIZE / 2, originY]}
                    stroke="black"
                    strokeWidth={3}
                />;
        }

        text = getText(data, originX, originY);

        originY += RECT_SIZE + SHAPE_MARGIN;

        if (data.type === "statement") {
            originY += 10;
        }
        return [shape, line, text, originY];
    }
    isActive() {
        if (this.props.loopState) {
            if (this.props.condState) {
                return [getActiveCircle("#5555df"), getActiveCircle("#13b913", 20)];
            }
            return getActiveCircle("#5555df");
        }
        else if (this.props.condState) {
            return getActiveCircle("#13b913", 20);
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
