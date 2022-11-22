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
        this.handleShapeData = this.handleShapeData.bind(this);
    }

    handleTypeOfObject(objectType){
        this.setState({objectType: objectType});
    }

    handleShapeData(data){
        if (!data){
            //buraya verinin silinmesi gelecek
            return;
        }
        data["type"] = this.state.objectType;
        this.props.onClick(data);
        /*
            Print: value, type
            Variable: value, type, name
            Operation: type, result, prosses
            Control Flow: type, control, isTrue, isFalse
            Loop: value(end) type 
        */
    }
    render() {
        return (
            <div className="user__panel">
                <Shapes onClick={this.handleTypeOfObject}/>
                <ShapesValue type={this.state.objectType} onClick={this.handleShapeData}/>
            </div>
        );
    }
}

export default UserPanel;