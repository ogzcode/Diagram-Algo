import { Circle } from "react-konva";

function getActiveCircle(color) {
    return <Circle
        x={20}
        y={20}
        radius={10}
        fill={color}
    />
}

export default getActiveCircle;