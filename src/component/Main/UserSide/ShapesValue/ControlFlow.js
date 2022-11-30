import React from "react";
import ValueBtn from "./ValueBtn";
import ErrorMessage from "./ErrorMessage";

function controlInput(input){
    let splitInput = input.split(" ");

    if (splitInput.length !== 3){
        return [
            "Hatalı giriş!",
            "İfadelerin arasında boşluk olmalı.",
            "Örnek Doğru Giriş: 'var1 > var2'.",
            "En fazla 2 ifade kullanılabilir.",
            "Koşul operatörleri : '>, <, !, ='"
        ];
    }
}

class ControlFlow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            control: "",
            errorState: false,
            errorMessageList: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleControlChange = this.handleControlChange.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
    }
    handleBtnClick(value){
        if (value){
            if (this.state.control) {
                let control = controlInput(this.state.control);
                
                if (control){
                    this.setState({
                        errorState: true,
                        errorMessageList: control
                    });
                }
                else {
                    this.props.onClick({
                        control: this.state.control,
                        statements: []
                    });
                }
            }
            else {
                this.setState({
                    errorState: true,
                    errorMessageList: ["Koşul girişi boş bırakılamaz!"]
                });
            }
        }

        this.setState({
            control: ""
        });
    }
    handleControlChange(e){
        this.setState({
            control: e.target.value
        });
    }
    handleErrorClick() {
        let error = !this.state.errorState;
        this.setState({ errorState: error, errorMessageList: [] });
    }
    render(){
        return (
            <div className="flow__box">
                <ErrorMessage 
                    errorState={this.state.errorState} 
                    errorMessageList= {this.state.errorMessageList}
                    onClick={this.handleErrorClick}
                />
                <label>KOŞUL İFADESİ</label>
                <input type="text" 
                    value={this.state.control} 
                    onChange={this.handleControlChange}
                    placeholder="Koşul ifadesi giriniz..."
                />
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default ControlFlow;