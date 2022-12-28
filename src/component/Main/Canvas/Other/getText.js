import { Text } from "react-konva";

const RECT_SIZE = 50
const CIRCLE_SIZE = 25

function getText(data, originX, originY) {
    const text = {
        "print": <Text
            x={originX}
            y={originY + CIRCLE_SIZE - CIRCLE_SIZE / 4}
            width={200}
            height={CIRCLE_SIZE}
            text={data.value}
            fill="black"
            fontSize={18}
        />,
        "variable": <Text
            x={originX}
            y={originY + RECT_SIZE / 3}
            width={200}
            height={RECT_SIZE}
            text={`${data.name}=${data.value}`}
            fill="black"
            fontSize={18}
        />,
        "operation": <Text
            x={originX}
            y={originY + RECT_SIZE / 3}
            width={200}
            height={RECT_SIZE}
            text={`${data.result}=${data.prosses}`}
            fill="black"
            fontSize={18}
        />,
        "loop": <Text
            x={originX}
            y={originY + RECT_SIZE / 3}
            width={200}
            height={RECT_SIZE / 4}
            text={`i=${data.value}`}
            fill="black"
            fontSize={18}
        />,
        "statement": <Text
            x={originX}
            y={originY + RECT_SIZE / 2}
            width={200}
            height={RECT_SIZE / 4}
            text={`${data.control}`}
            fill="black"
            fontSize={18}
        />
    };

    return text[data.type];
}

export default getText;