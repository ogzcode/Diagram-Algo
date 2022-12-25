import React from "react";
import ValueBtn from "./ValueBtn";
import ErrorMessage from "./ErrorMessage";

class LoopInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            errorState: false,
            errorMessageList: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
    }
    handleBtnClick(value){
        if (value){
            if (this.state.value !== ""){
                this.props.onClick({value: this.state.value, statements: []});
            }
            /* else {
                this.setState({
                    errorState: true,
                    errorMessageList: [
                        "Döngü değeri boş bırakılamaz!", 
                        "Döngü değeri pozitif sayı olmalıdır!"
                    ]
                });
            } */
        }

        this.setState({value: ""});
    }
    handleChange(e){
        this.setState({value: e.target.value});

        /* let value = parseInt(e.target.value);

        if (value === 0){
            this.setState({
                value: value
            });
            return;
        }
        if (!Number.isInteger(value) || isNaN(value)) {
            this.setState({
                value: 0,
                errorState: true,
                errorMessageList: ["Döngü değeri pozitif sayılardan oluşmalıdır!"]
            });
        }
        else {
            this.setState({
                value: value
            });
        } */
    }
    handleErrorClick() {
        let error = !this.state.errorState;
        this.setState({ errorState: error, errorMessageList: [] });
    }
    render() {
        return (
            <div className="loop__box">
                <ErrorMessage 
                    errorState={this.state.errorState} 
                    errorMessageList= {this.state.errorMessageList}
                    onClick={this.handleErrorClick}
                />
                <div>
                    <label>DÖNGÜ SAYISI</label>
                    <input type="text" 
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Döngü tekrar sayısı giriniz..."
                    />
                </div>
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default LoopInput;