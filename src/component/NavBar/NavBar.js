import React from "react";
import "./NavBar.css";
import DocPage from "./Doc/DocPage.js";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            docIsOpen: false
        };
        this.handleClickRun = this.handleClickRun.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleDocPage = this.handleDocPage.bind(this);
    }
    handleClickRun(){
        this.props.onClick(true);
    }
    handleClickDelete(){
        this.props.onDelete();
    }
    handleDocPage(value){
        this.setState({
            docIsOpen: value
        });
    }
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">Diagram-Algo</h1>
                <div>
                    <button className="nav__btn run--btn" onClick={this.handleClickRun}>Çalıştır</button>
                    <button className="nav__btn delete--btn" onClick={this.handleClickDelete}>Temizle</button>
                    <button className="nav__btn doc--btn" onClick={() => this.handleDocPage(true)}>Yardım</button>
                </div>
                {
                    this.state.docIsOpen && <DocPage onClick={this.handleDocPage}/>
                }
            </div>
        );
    }
}

export default NavBar;