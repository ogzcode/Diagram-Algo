import React from "react";
import "./ShapesValue.css";
import VariableInput from "./VariableInput.js";
import PrintInput from "./PrintInput.js";
import OperationInput from "./OperationInput";
import ControlFlow from "./ControlFlow";
import LoopInput from "./LoopInput";

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
            return <OperationInput onClick={this.getData}/>
        }
        else if (this.props.type === "statement"){
            return <ControlFlow onClick={this.getData}/>
        }
        else if (this.props.type === "loop"){
            return <LoopInput onClick={this.getData}/>
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