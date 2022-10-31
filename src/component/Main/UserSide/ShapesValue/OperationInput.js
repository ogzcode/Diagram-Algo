import React from "react";
import ValueBtn from "./ValueBtn";

class OperationInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: "",
            operation: ""
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
    }
    handleBtnClick(value){
        if (value && this.state.result && this.state.operation){
            this.props.onClick({
                result: this.state.result,
                prosses: this.state.operation
            });
        }

        this.setState({
            result: "",
            operation: ""
        });
    }
    handleResult(e){
        this.setState({
            result: e.target.value
        });
    }
    handleOperation(e){
        this.setState({
            operation: e.target.value
        });
    }
    render(){
        return (
            <div className="input__box">
                <label>Operation</label>
                <div className="expr__box">
                    <input type="text" 
                        className="equal__var" 
                        value={this.state.result} 
                        onChange={this.handleResult}
                    />
                    <span>=</span>
                    <input type="text" 
                        value={this.state.operation} 
                        onChange={this.handleOperation}
                        className="operation"    
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}


export default OperationInput;