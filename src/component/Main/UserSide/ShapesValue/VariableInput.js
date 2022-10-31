import React from "react";
import ValueBtn from "./ValueBtn";


class VariableInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            value: ""
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleBtnClick(value){
        if (value && this.state.value && this.state.name){
            this.props.onClick({
                name: this.state.name,
                value: this.state.value
            });
        }
        else {
            this.props.onClick(value);
        }
        this.setState({
            value: "",
            name: ""
        });
    }
    handleNameChange(e){
        let value = e.target.value;
        this.setState({
            name: value
        });
    }
    handleValueChange(e){
        let value = parseInt(e.target.value);

        if (!Number.isInteger(value) || isNaN(value)){
            this.setState({
                value: ""
            });
        }
        else {
            this.setState({
                value: value
            });
        }
    }
    render(){
        return (
            <div className="input__box variable">
                <div className="box">
                    <label>Name</label>
                    <input type="text" 
                        placeholder="Enter name of variable" 
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                </div>
                <div className="box">
                    <label>Variable</label>
                    <input type="text" 
                        onChange={this.handleValueChange}
                        value={this.state.value}
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}


export default VariableInput;