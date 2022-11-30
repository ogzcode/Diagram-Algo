import React from "react";
import ValueBtn from "./ValueBtn.js";
import ErrorMessage from "./ErrorMessage.js";

class PrintInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            errorState: false,
            errorMessageList: []
        };

        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
    }
    handleBtnClick(value){
        if (value){
            if (this.state.value) {
                this.props.onClick({
                    value: this.state.value
                });
            }
            else {
                this.setState({
                    errorState: true,
                    errorMessageList: ["Giriş kısmı boş bırakılamaz!"]
                });
            }
        }
        this.setState({
            value: ""
        });
    }
    handleInputChange(e){
        this.setState({value: e.target.value});
    }
    handleErrorClick() {
        let error = !this.state.errorState;
        this.setState({ errorState: error, errorMessageList: [] });
    }
    render(){
        return (
            <div className="print__box">
                <ErrorMessage 
                    errorState={this.state.errorState} 
                    errorMessageList= {this.state.errorMessageList}
                    onClick={this.handleErrorClick}
                />
                <label>Yazdır</label>
                <input type="text" 
                    value={this.state.value} 
                    onChange={this.handleInputChange}
                    placeholder="Dize veya değişken ismi giriniz($n)..."
                />
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default PrintInput;