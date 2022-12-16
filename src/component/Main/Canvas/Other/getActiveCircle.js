import { Circle } from "react-konva";

function getActiveCircle(color, margin=0) {
    return <Circle
        x={20}
        y={20 + margin}
        radius={10}
        fill={color}
    />
}

export default getActiveCircle;