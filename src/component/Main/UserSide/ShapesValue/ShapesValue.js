import React from "react";
import "./ShapesValue.css";

class VariableInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            value: 0
        }
    }
    render(){
        return (
            <div className="input__box variable">
                <div className="box">
                    <label>Name</label>
                    <input type="text" placeholder="Enter name of variable"/>
                </div>
                <div className="box">
                    <label>Variable</label>
                    <input type="number"/>
                </div>
                <button className="btn create">Create</button>
                <button className="btn delete">Delete</button>
            </div>
        );
    }
}

class OperationInput extends React.Component {
    constructor(props){
        super(props);
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
                <button className="btn create">Create</button>
                <button className="btn delete">Delete</button>
            </div>
        );
    }
}

class ControlFlow extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="flow__box">
                <label>Control Statement</label>
                <input type="text"/>
                <button className="btn create">Create</button>
                <button className="btn delete">Delete</button>
            </div>
        );
    }
}

class LoopInput extends React.Component {
    constructor(props){
        super(props);
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
                <button className="btn create">Create</button>
                <button className="btn delete">Delete</button>
            </div>
        );
    }
}

class PrintInput extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="print__box">
                <label>Print Console</label>
                <input type="text"/>
                <button className="btn create">Create</button>
                <button className="btn delete">Delete</button>
            </div>
        );
    }
}

class ShapesValue extends React.Component {
    constructor(props){
        super(props);
    }
    getValue(){
        if (this.props.type === "variable"){
            return <VariableInput/>
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
            return <PrintInput/>
        }
        else {
            return null;
        }
    }
    render() {
        return (
            <div className="shapes__value">
                {
                    this.getValue()
                }
            </div>
        );
    }
}

export default ShapesValue;