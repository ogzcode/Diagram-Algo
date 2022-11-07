import React from "react";
import "./Console.css";
import tokenizeForPrint from "./Function/tokenizeForPrint";
import isVariable from "./Function/isVariable";

function tokenizeForOperation(operation, variableList){
    const op = tokenizeProsses(operation.prosses);

    let var1 = isVariable(op.variableOne, variableList);
    let var2 = isVariable(op.variableTwo, variableList);
    let result = isVariable(operation.result, variableList);
    let res = null;

    if (var1 && var2){
        if (op.operator === "+"){
            res = var1.value + var2.value;
        }
        else if (op.operator === "-"){
            res = var1.value - var2.value;
        }
        else if (op.operator === "*"){
            res = var1.value * var2.value;
        }
        else if (op.operator === "/"){
            res = var1.value / var2.value;
        }
    }
    else {
        return false;
    }

    if (result){
        let index = variableList.indexOf(result);
        variableList[index].value = res;
    }
    else {
        return false;
    }
}

function tokenizeProsses(data){
    let operation = {
        "variableOne": "",
        "operator": "",
        "variableTwo": ""
    };
    let charList = [];

    for (let char of data){
        if ("+-*/".includes(char)){
            if (operation.variableOne === ""){
                operation.variableOne = charList.join("");
                charList = charList.splice();
                operation.operator = char;
            }
            else {
                return false;
            }
        }
        else {
            charList.push(char);
        }
    }
    operation.variableTwo = charList.join("");
    return operation;
}

function tokenizeExpression(value){
    const operation = {
        "valueOne": "",
        "operator": "",
        "valueTwo": ""
    };

    let charList = [];

    for (let char of value){
        if ("><=!".includes(char)){
            if (operation.valueOne === ""){
                operation.valueOne = charList.join("");
                charList = charList.splice();
                operation.operator = char;
            }
            else {
                return false;
            }
        }
        else {
            charList.push(char);
        }
    }
    operation.valueTwo = charList.join("");
    return operation;
}

function tokenizeForCondition(data, variableList){
    const op = tokenizeExpression(data.control);

    let var1 = isVariable(op.valueOne, variableList);
    let var2 = isVariable(op.valueTwo, variableList);
    let res = null;

    if (var1 && var2){
        if (op.operator === ">"){
            res = var1.value > var2.value;
        }
        else if (op.operator === "<"){
            res = var1.value < var2.value;
        }
        else if (op.operator === "="){
            res = var1.value == var2.value;
        }
        else if (op.operator === "!"){
            res = var1.value != var2.value;
        }
    }
    else {
        return false;
    }

    let text = null;

    if (res){
        text = tokenizeForPrint(data.isTrue.split(" "), variableList);
    }
    else {
        text = tokenizeForPrint(data.isFalse.split(" "), variableList);
    }

    return text;
}

class Console extends React.Component {
    constructor(props){
        super(props);
        this.handleCloseBtn = this.handleCloseBtn.bind(this);
        this.state = {
            variableList: [],
            printTextList: []
        }; 
    }
    handleCloseBtn(){
        this.props.onClick(false);
    }
    componentDidMount(){
        this.compiler();
    }
    componentDidUpdate(prevProps){
        if (this.props.data.lenght > prevProps.data.lenght){
            this.compiler();
        }
        else if (this.props.data.length < prevProps.data.length){
            this.setState({
                variableList: [],
                printTextList: []
            });
        }
    }
    compiler(){
        const variableList = this.state.variableList.slice();
        const printTextList = this.state.printTextList.slice();
        for (let d of this.props.data){
            if (d.type === "variable"){
                variableList.push({"name": d.name, "value": d.value});
            }
            else if (d.type === "print"){
                let res = tokenizeForPrint(d.value.split(" "), variableList);
                printTextList.push(res);
            }
            else if (d.type === "operation"){
                let res = tokenizeForOperation(d, variableList);

                if(res === false){
                    printTextList.push("Operation not compiled");
                }
            }
            else if (d.type === "statement"){
                let res = tokenizeForCondition(d, variableList);

                if (res === false){
                    printTextList.push("Condition not compiled");
                }
                else {
                    printTextList.push(res);
                }
            }
        }

        this.setState({
            variableList: variableList,
            printTextList: printTextList
        });
    }
    render(){
        return (
            <div className="console">
                <button className="close__btn" onClick={this.handleCloseBtn}>Close</button>
                <div className="text__field">
                    {
                        this.state.printTextList.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Console;