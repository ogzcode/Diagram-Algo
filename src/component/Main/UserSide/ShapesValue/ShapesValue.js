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
        const data = {
            "variable": <VariableInput onClick={this.getData}/>,
            "operation": <OperationInput onClick={this.getData}/>,
            "statement": <ControlFlow onClick={this.getData}/>,
            "loop": <LoopInput onClick={this.getData}/>,
            "print": <PrintInput onClick={this.getData}/>
        };
        
        return data[this.props.type];
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