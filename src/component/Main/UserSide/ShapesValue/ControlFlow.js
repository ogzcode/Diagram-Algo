import React from "react";
import ValueBtn from "./ValueBtn";
import ErrorMessage from "./ErrorMessage";

class ControlFlow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            control: "",
            isTrue: "",
            isFalse: "",
            errorState: false,
            errorMessageList: []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleControlChange = this.handleControlChange.bind(this);
        this.handleIsTrueChange = this.handleIsTrueChange.bind(this);
        this.handleIsFalseChange = this.handleIsFalseChange.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
        
    }
    handleBtnClick(value){
        if (value){
            if (this.state.isTrue && this.state.isFalse && this.state.control) {
                this.props.onClick({
                    control: this.state.control,
                    isTrue: this.state.isTrue,
                    isFalse: this.state.isFalse
                });
            }
            else {
                this.setState({
                    errorState: true,
                    errorMessageList: [
                        "Koşul girişi boş bırakılamaz!", 
                        "Doğru ise girişi boş bırakılamaz!",
                        "Yanlış ise girişi boş bırakılamaz!"
                    ]
                });
            }
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
                <label>DOĞRU İSE</label>
                <input type="text" 
                    value={this.state.isTrue} 
                    onChange={this.handleIsTrueChange}
                    placeholder="Doğru koşul için ifade giriniz..."
                />
                <label>YANLIŞ İSE</label>
                <input type="text" 
                    value={this.state.isFalse} 
                    onChange={this.handleIsFalseChange}
                    placeholder="Yanlış koşul için ifade giriniz..."
                />
                <ValueBtn onClick={this.handleBtnClick}/>
            </div>
        );
    }
}

export default ControlFlow;