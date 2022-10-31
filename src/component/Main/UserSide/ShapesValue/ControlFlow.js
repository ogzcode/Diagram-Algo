import React from "react";
import ValueBtn from "./ValueBtn";

class ControlFlow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            control: "",
            isTrue: "",
            isFalse: ""
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleControlChange = this.handleControlChange.bind(this);
        this.handleIsTrueChange = this.handleIsTrueChange.bind(this);
        this.handleIsFalseChange = this.handleIsFalseChange.bind(this);
        
    }
    handleBtnClick(value){
        if (value && this.state.isTrue && this.state.isFalse && this.state.control){
            this.props.onClick({
                control: this.state.control,
                isTrue: this.state.isTrue,
                isFalse: this.state.isFalse
            });
        }

        this.setState({
            control: "",
            isTrue: "",
            isFalse: ""
        });
    }
    handleIsFalseChange(e){
        this.setState({
            isFalse: e.target.value
        });
    }
    handleIsTrueChange(e){
        this.setState({
            isTrue: e.target.value
        });
    }
    handleControlChange(e){
        this.setState({
            control: e.target.value
        });
    }
    render(){
        return (
            <div className="flow__box">
                <label>Control Statement</label>
                <input type="text" value={this.state.control} onChange={this.handleControlChange}/>
                <label>True</label>
                <input type="text" value={this.state.isTrue} onChange={this.handleIsTrueChange}/>
                <label>False</label>
                <input type="text" value={this.state.isFalse} onChange={this.handleIsFalseChange}/>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default ControlFlow;