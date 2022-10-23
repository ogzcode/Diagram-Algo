import React from "react";
import "./UserPanel.css";
import Shapes from "./Shapes/Shapes.js";
import ShapesValue from "./ShapesValue/ShapesValue.js";

class UserPanel extends React.Component {
    render() {
        return (
            <div className="user__panel">
                <Shapes/>
                <ShapesValue/>
            </div>
        );
    }
}

export default UserPanel;