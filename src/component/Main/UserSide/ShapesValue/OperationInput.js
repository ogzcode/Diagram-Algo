import React from "react";
import ValueBtn from "./ValueBtn";
import ErrorMessage from "./ErrorMessage";

class OperationInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: "",
            operation: "",
            errorState: false,
            errorMessageList: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
    }
    handleBtnClick(value){
        if (value){
            if (this.state.result && this.state.operation) {
                this.props.onClick({
                    result: this.state.result,
                    prosses: this.state.operation
                });
            }
            else {
                this.setState({
                    errorState: true,
                    errorMessageList: ["Değişken ismi boş bırakılamaz!", "İşlem bölümü boş bırakılamaz!"]
                });
            }
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
    handleErrorClick() {
        let error = !this.state.errorState;
        this.setState({ errorState: error, errorMessageList: [] });
    }
    render(){
        return (
            <div className="input__box">
                <ErrorMessage 
                    errorState={this.state.errorState} 
                    errorMessageList= {this.state.errorMessageList}
                    onClick={this.handleErrorClick}
                />
                <label>ARİTMETİK İŞLEM</label>
                <div className="expr__box">
                    <label>DEĞİŞKEN</label>
                    <input type="text" 
                        className="equal__var" 
                        value={this.state.result} 
                        onChange={this.handleResult}
                        placeholder="Değişken ismi giriniz"
                    />
                    <label>İŞLEM</label>
                    <input type="text" 
                        value={this.state.operation} 
                        onChange={this.handleOperation}
                        className="operation"  
                        placeholder="Aritmetik bir işlem giriniz"  
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}


export default OperationInput;