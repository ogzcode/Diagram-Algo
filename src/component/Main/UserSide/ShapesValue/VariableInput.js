import React from "react";
import ValueBtn from "./ValueBtn";
import ErrorMessage from "./ErrorMessage";


class VariableInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: "",
            errorState: false,
            errorMessageList: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
    }
    handleBtnClick(value) {
        if (value) {
            if (this.state.value && this.state.name) {
                this.props.onClick({
                    name: this.state.name,
                    value: this.state.value
                });
            }
            else {
                this.setState({
                    errorState: true,
                    errorMessageList: ["Değişken ismi boş olamaz!", "Değişken değeri boş olamaz!"]
                });
            }
        }
        this.setState({
            value: "",
            name: ""
        });
    }
    handleNameChange(e) {
        let value = e.target.value;
        this.setState({
            name: value
        });
    }
    handleValueChange(e) {
        let value = parseInt(e.target.value);

        if (!Number.isInteger(value) || isNaN(value)) {
            this.setState({
                value: "",
                errorState: true,
                errorMessageList: ["Değişken değeri pozitif sayılardan oluşmalıdır!"]
            });
        }
        else {
            this.setState({
                value: value
            });
        }
    }
    handleErrorClick() {
        let error = !this.state.errorState;
        this.setState({ errorState: error, errorMessageList: [] });
    }
    render() {
        return (
            <div className="input__box variable">
                <ErrorMessage 
                    errorState={this.state.errorState} 
                    errorMessageList= {this.state.errorMessageList}
                    onClick={this.handleErrorClick}
                />
                <div className="box">
                    <label>DEĞİŞKEN İSMİ</label>
                    <input type="text"
                        placeholder="Değişkenin ismini giriniz..."
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                </div>
                <div className="box">
                    <label>DEĞİŞKEN DEĞERİ</label>
                    <input type="text"
                        placeholder="Pozitif sayı giriniz..."
                        onChange={this.handleValueChange}
                        value={this.state.value}
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick} />
            </div>
        );
    }
}


export default VariableInput;