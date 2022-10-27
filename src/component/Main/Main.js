import React from "react";
import "./Main.css"
import UserPanel from "./UserSide/UserPanel.js";
import Canvas from "./Canvas/Canvas";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.handleShapeData = this.handleShapeData.bind(this);
        this.state = {
            data: []
        }
    }
    handleShapeData(value){
        const data = this.state.data.slice();
        data.push(value);
        this.setState({
            data: data
        });
        this.props.onClick(data);
    }
    render(){
        return (
            <div className="main">
                <UserPanel onClick={this.handleShapeData}/>
                <Canvas data={this.state.data}/>
            </div>
        );
    }
}

export default Main;