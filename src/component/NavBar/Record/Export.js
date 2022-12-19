//Kaydet
import React from "react";
import "./Record.css";

class Export extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            isEmpty: false
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
        this.handleExport = this.handleExport.bind(this);
    }
    handleOnChange(e){
        this.setState({
            value: e.target.value,
            isEmpty: false
        });
    }
    handleOnClose(){
        this.props.onClose(false);
    }
    handleExport(){
        let data = JSON.parse(localStorage.getItem("projects")) || [];
        if (this.state.value !== ""){
            data.push({"name": this.state.value, "shema": this.props.data});
            localStorage.setItem("projects", JSON.stringify(data));
            this.handleOnClose();
        }
        else {
            this.setState({
                isEmpty: true
            });
        }
    }
    render(){
        return (
            <div className="record__container">
                <div className="inner__record">
                    <label>Proje Adı</label>
                    <input type="text" 
                        value={this.state.value} 
                        onChange={this.handleOnChange}
                        style={this.state.isEmpty ? {borderColor: "red"} : {}}
                    />
                    <button className="export__btn" onClick={this.handleExport}>Kaydet</button>
                    <button className="record__close__btn" onClick={this.handleOnClose}>X</button>
                </div>
            </div>
        );
    }
}

export default Export;