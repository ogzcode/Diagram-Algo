import React from "react";
import "./Canvas.css";
import { useRef, useEffect, useState } from "react";
import { Stage, Rect, Layer } from "react-konva";

function Canvas() {
    const parent = useRef();
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setWidth(parent.current.parentElement.offsetWidth);
        setHeight(parent.current.parentElement.offsetHeight);
        console.log(parent.current.parentElement.offsetWidth,parent.current.parentElement.offsetHeight);
    }, []);

    return (
        <div ref={parent} className="canvas">
        </div>
    ); 
}
export default Canvas;
