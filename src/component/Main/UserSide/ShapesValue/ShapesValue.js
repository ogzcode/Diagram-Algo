import React from "react";
import "./ShapesValue.css";
import ValueBtn from "./ValueBtn.js";
import VariableInput from "./VariableInput.js";
import PrintInput from "./PrintInput.js";

class OperationInput extends React.Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(value){
        console.log(value);
    }
    render(){
        return (
            <div className="input__box">
                <label>Operation</label>
                <div className="expr__box">
                    <input type="text" className="equal__var"/>
                    <span>=</span>
                    <input type="text"/>
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

class ControlFlow extends React.Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(value){
        console.log(value);
    }
    render(){
        return (
            <div className="flow__box">
                <label>Control Statement</label>
                <input type="text"/>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

class LoopInput extends React.Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(value){
        console.log(value);
    }
    render() {
        return (
            <div className="loop__box">
                <div>
                    <label>Loop Variable</label>
                    <input type="text" placeholder="Enter loop variable name"/>
                    <input type="text" placeholder="Enter loop variable value"/>
                </div>
                <div>
                    <label>Loop Condition</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Loop Step</label>
                    <input type="number" min="0" max="10"/>
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

class ShapesValue extends React.Component {
    constructor(props){
        super(props);
        this.getData = this.getData.bind(this);
    }
    getData(data){
        this.props.onClick(data);
    }
    getValue(){
        if (this.props.type === "variable"){
            return <VariableInput onClick={this.getData}/>
        }
        else if(this.props.type === "operation"){
            return <OperationInput/>
        }
        else if (this.props.type === "statement"){
            return <ControlFlow/>
        }
        else if (this.props.type === "loop"){
            return <LoopInput/>
        }
        else if (this.props.type === "print"){
            return <PrintInput onClick={this.getData}/>
        }
        else {
            return null;
        }
    }
    render() {
        let comp = this.getValue();
        return (
            <div className="shapes__value">
                { comp }
            </div>
        );
    }
}

export default ShapesValue;