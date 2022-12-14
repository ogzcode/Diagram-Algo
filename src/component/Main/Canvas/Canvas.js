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
        let lastIndex = data.length - 1;
        if (dataLen > shapeLen) {
            let d = null;
            if (data[lastIndex].type === "loop" && data[lastIndex].statements.length > 0) {
                let elem = data[lastIndex].statements[data[lastIndex].statements.length - 1];
                d = this.drawShapes(elem, "loop");
            }
            else if (data[lastIndex].type === "statement" && data[lastIndex].statements.length > 0) {
                let elem = data[lastIndex].statements[data[lastIndex].statements.length - 1];
                d = this.drawShapes(elem, "state");
            }
            else {
                d = this.drawShapes(data[data.length - 1], null);
            }
            this.setState({
                shapeList: d.shapeList,
                lineList: d.lineList,
                textList: d.textList,
                originX: d.originX,
                originY: d.originY
            });
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
            return getActiveCircle("#5555df");
        }
        else if (this.props.condState) {
            return getActiveCircle("#13b913");
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
