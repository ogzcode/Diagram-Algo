import React from "react";
import "./Main.css"
import UserPanel from "./UserSide/UserPanel.js";
import Canvas from "./Canvas/Canvas";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.handleShapeData = this.handleShapeData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCondClick = this.handleCondClick.bind(this);
    }
    handleShapeData(value){
        this.props.onClick(value);
    }
    handleClick(value){
        this.props.onLoopClick(value);
    }
    handleCondClick(value){
        this.props.onCondClick(value);
    }
    render(){
        return (
            <div className="main">
                <UserPanel onClick={this.handleShapeData}/>
                <Canvas 
                    data={this.props.data} 
                    onLoopClick={this.handleClick} 
                    loopState={this.props.loopState}
                    condState={this.props.condState}
                    onCondClick={this.handleCondClick}
                    onDoubleClick={this.props.onDoubleClick}
                />
            </div>
        );
    }
}

export default Main;