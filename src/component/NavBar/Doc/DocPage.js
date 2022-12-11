import React from "react";
import FirstPanel from "./Content/FirstPanel";
import Fundamental from "./Content/Fundamental";
import Variable from "./Content/Variable";
import "./DocPage.css";
import "./Content/Content.css";
import Expression from "./Content/Expression";

class DocPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
        this.handleOnClose = this.handleOnClose.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }
    handleOnClose() {
        this.props.onClick(false);
    }
    onChangeContent(value){
        this.setState({content: value});
    }
    render() {
        let content = null;

        if (this.state.content === "Fundamental"){
            content = <Fundamental/>
        }
        else if (this.state.content === "Variable"){
            content = <Variable/>
        }
        else if (this.state.content === "Expression") {
            content = <Expression/>
        }
        else {
            content = <FirstPanel/>
        }
        return (
            <div className="doc__container">
                <div className="doc__inner">
                    <div className="doc__select__side">
                        <p onClick={() => this.onChangeContent("Fundamental")}>Başlangıç</p>
                        <p onClick={() => this.onChangeContent("Variable")}>Değişken</p>
                        <p onClick={() => this.onChangeContent("Expression")}>İşlem</p>
                        <p>Koşul</p>
                        <p>Döngü</p>
                        <p>Yazdır</p>
                    </div>
                    <div className="doc__side">
                        { content }
                    </div>
                    <button className="doc__close__btn" onClick={this.handleOnClose}>X</button>
                </div>
            </div>
        );
    }
}

export default DocPage;