import React from "react";
import FirstPanel from "./Content/FirstPanel";
import Fundamental from "./Content/Fundamental";
import Variable from "./Content/Variable";
import "./DocPage.css";
import "./Content/Content.css";
import Expression from "./Content/Expression";
import Print from "./Content/Print";
import Loop from "./Content/Loop";
import Condition from "./Content/Condition";

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
    getDocSelectSide(){
        let content = [
            {
                "value": "Fundamental",
                "name": "Başlangış"
            },
            {
                "value": "Variable",
                "name": "Değişken"
            },
            {
                "value": "Expression",
                "name": "İşlem"
            },
            {
                "value": "Condition",
                "name": "Koşul"
            },
            {
                "value": "Loop",
                "name": "Döngü"
            },
            {
                "value": "Print",
                "name": "Yazdır"
            },
        ];

        return content.map((d, i) => 
        <p onClick={() => this.onChangeContent(d.value)} key={i}>
            <span style={{marginRight: ".25rem", fontSize: "16px"}}>&#9889;</span>
            {d.name}
        </p>
        );
    }

    render() {
        let content = null;

        let panels = {
            "Fundamental": <Fundamental/>,
            "Variable": <Variable/>,
            "Expression": <Expression/>,
            "Print": <Print/>,
            "Loop": <Loop/>,
            "Condition": <Condition/>,
        };

        if (this.state.content !== ""){
            content = panels[this.state.content];
        }
        else {
            content = <FirstPanel/>
        }
        
        return (
            <div className="doc__container">
                <div className="doc__inner">
                    <div className="doc__select__side">
                        {this.getDocSelectSide()}
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