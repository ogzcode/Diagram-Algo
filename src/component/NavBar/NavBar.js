import React from "react";
import "./NavBar.css";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClickRun = this.handleClickRun.bind(this);
    }
    handleClickRun(){
        this.props.onClick(true);
    }
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">Diagram-Algo</h1>
                <button className="run__btn" onClick={this.handleClickRun}>Run</button>
            </div>
        );
    }
}

export default NavBar;