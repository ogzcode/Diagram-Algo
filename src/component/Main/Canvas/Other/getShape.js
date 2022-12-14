import { Rect, Circle } from "react-konva";
import getBorder from "./getBorder";
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
        let stroke = getBorder(border);
        return <Circle
            x={originX + CIRCLE_SIZE}
            y={originY + CIRCLE_SIZE}
            radius={CIRCLE_SIZE}
            fill="#ff5ca8"
            stroke={stroke.color}
            strokeWidth={stroke.width}
            key={originY}
        />;
    }
    else if (type === "operation") {
        let stroke = getBorder(border);
        return <Rect
            x={originX - RECT_SIZE / 2}
            y={originY}
            width={RECT_SIZE * 2}
            height={RECT_SIZE}
            fill="#f7e600"
            stroke={stroke.color}
            strokeWidth={stroke.width}
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

export default getShape;