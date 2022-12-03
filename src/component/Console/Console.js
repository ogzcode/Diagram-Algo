import React from "react";
import "./Console.css";
import tokenizeForPrint from "./Function/tokenizeForPrint";
import tokenizeForOperation from "./Function/tokenizeForOperation";
import tokenizeForCondition from "./Function/tokenizeForCondition";
import tokenizeForLoop from "./Function/tokenizeForLoop";
import isVariable from "./Function/isVariable";

class Console extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseBtn = this.handleCloseBtn.bind(this);
        this.state = {
            variableList: [],
            printTextList: []
        };
    }
    handleCloseBtn() {
        this.props.onClick(false);
    }
    componentDidMount() {
        this.compiler();
    }
    componentDidUpdate(prevProps) {
        if (this.props.data.lenght > prevProps.data.lenght) {
            this.compiler();
        }
        else if (this.props.data.length < prevProps.data.length) {
            this.setState({
                variableList: [],
                printTextList: []
            });
        }
    }
    compiler() {
        const variableList = this.state.variableList.slice();
        const printTextList = this.state.printTextList.slice();
        for (let d of this.props.data) {
            if (d.type === "variable") {
                let v = isVariable(d.name, variableList);
                if (v){
                    let i = variableList.indexOf(v);
                    variableList[i].value = d.value;
                }
                else {
                    variableList.push({ "name": d.name, "value": d.value });
                }
            }
            else if (d.type === "print") {
                let res = tokenizeForPrint(d.value.split(" "), variableList);
                printTextList.push(res);
            }
            else if (d.type === "operation") {
                let res = tokenizeForOperation(d, variableList);

                if (res) {
                    printTextList.push(res);
                }
            }
            else if (d.type === "statement") {
                let res = tokenizeForCondition(d, variableList);

                if (res === false) {
                    printTextList.push("Condition not compiled");
                }
                else {
                    printTextList.push(res);
                }
            }
            else if (d.type === "loop"){
                let res = tokenizeForLoop(d, variableList);

                if (res === false){
                    printTextList.push("Loop Error");
                }
            }
        }

        this.setState({
            variableList: variableList,
            printTextList: printTextList
        });
    }
    render() {
        return (
            <div className="console">
                <div className="console__top">
                    <p>Konsol Ekranı</p>
                    <button className="close__btn" onClick={this.handleCloseBtn}>X</button>
                </div>
                <div className="text__field">
                    {
                        this.state.printTextList.map((text, index) => (
                            <p key={index}>#    {text}</p>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Console;