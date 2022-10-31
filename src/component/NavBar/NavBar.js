import React from "react";
import "./NavBar.css";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClickRun = this.handleClickRun.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }
    handleClickRun(){
        this.props.onClick(true);
    }
    handleClickDelete(){
        this.props.onDelete();
    }
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">Diagram-Algo</h1>
                <div>
                    <button className="nav__btn run--btn" onClick={this.handleClickRun}>Run</button>
                    <button className="nav__btn delete--btn" onClick={this.handleClickDelete}>Delete All</button>
                </div>
            </div>
        );
    }
}

export default NavBar;