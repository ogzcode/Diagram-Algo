import React from "react";
import "./Main.css"
import UserPanel from "./UserSide/UserPanel.js";
import Canvas from "./Canvas/Canvas";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.handleShapeData = this.handleShapeData.bind(this);
    }
    handleShapeData(value){
        const data = this.props.data.slice();
        data.push(value);
        this.props.onClick(data);
    }
    render(){
        return (
            <div className="main">
                <UserPanel onClick={this.handleShapeData}/>
                <Canvas data={this.props.data}/>
            </div>
        );
    }
}

export default Main;