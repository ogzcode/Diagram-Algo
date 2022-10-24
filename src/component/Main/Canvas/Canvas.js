import React from "react";
import "./Canvas.css";
import { useRef, useEffect, useState } from "react";

function Canvas() {
    const parent = useRef();
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setWidth(parent.current.parentElement.offsetWidth);
        setHeight(parent.current.parentElement.offsetHeight);
    }, []);

    return (
        <div ref={parent} className="canvas">
        </div>
    ); 
}
export default Canvas;
