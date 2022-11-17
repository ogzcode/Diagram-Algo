import isVariable from "./isVariable";
import tokenizeForPrint from "./tokenizeForPrint";

function tokenizeExpression(value) {
    const operation = {
        "valueOne": "",
        "operator": "",
        "valueTwo": ""
    };

    let charList = [];

    for (let char of value) {
        if ("><=!".includes(char)) {
            if (operation.valueOne === "") {
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

function tokenizeForCondition(data, variableList) {
    const op = tokenizeExpression(data.control);

    let var1 = isVariable(op.valueOne, variableList);
    let var2 = isVariable(op.valueTwo, variableList);
    let res = null;

    if (var1 && var2) {
        if (op.operator === ">") {
            res = var1.value > var2.value;
        }
        else if (op.operator === "<") {
            res = var1.value < var2.value;
        }
        else if (op.operator === "=") {
            res = var1.value === var2.value;
        }
        else if (op.operator === "!") {
            res = var1.value !== var2.value;
        }
    }
    else {
        return false;
    }

    let text = null;

    if (res) {
        text = tokenizeForPrint(data.isTrue.split(" "), variableList);
    }
    else {
        text = tokenizeForPrint(data.isFalse.split(" "), variableList);
    }

    return text;
}

export default tokenizeForCondition;