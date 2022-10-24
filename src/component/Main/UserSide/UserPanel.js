import React from "react";
import "./UserPanel.css";
import Shapes from "./Shapes/Shapes.js";
import ShapesValue from "./ShapesValue/ShapesValue.js";

class UserPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            objectType: null
        };
        this.handleTypeOfObject = this.handleTypeOfObject.bind(this);
    }

    handleTypeOfObject(objectType){
        this.setState({objectType: objectType});
    }
    render() {
        return (
            <div className="user__panel">
                <Shapes onClick={this.handleTypeOfObject}/>
                <ShapesValue type={this.state.objectType}/>
            </div>
        );
    }
}

export default UserPanel;