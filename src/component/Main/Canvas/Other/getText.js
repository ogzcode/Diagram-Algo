import { Text } from "react-konva";

const RECT_SIZE = 50
const CIRCLE_SIZE = 25

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
            x={originX + 15}
            y={originY + RECT_SIZE / 3}
            width={RECT_SIZE}
            height={RECT_SIZE / 4}
            text={`i=${data.value}`}
            fill="black"
            fontSize={14}
        />,
        "statement": <Text
            x={originX}
            y={originY + RECT_SIZE / 2}
            width={RECT_SIZE}
            height={RECT_SIZE / 4}
            text={`${data.control}`}
            fill="black"
            fontSize={14}
            align="center"
        />
    };

    return text[data.type];
}

export default getText;