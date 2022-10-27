import React from "react";
import ValueBtn from "./ValueBtn.js";

class PrintInput extends React.Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            value: ""
        };
    }
    handleBtnClick(value){
        if (value && this.state.value){
            this.props.onClick({
                value: this.state.value
            });
        }
        
        this.setState({
            value: ""
        });
    }
    handleInputChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return (
            <div className="print__box">
                <label>Print Console</label>
                <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default PrintInput;