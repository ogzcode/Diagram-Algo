import React from "react";
import ValueBtn from "./ValueBtn";

class LoopInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleBtnClick(value){
        if (value && this.state.value > 0){
            this.props.onClick({value: this.state.value, statements: []});
        }

        this.setState({value: 0});
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div className="loop__box">
                <div>
                    <label>End Value</label>
                    <input type="number" 
                        placeholder="Enter loop end value" 
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default LoopInput;