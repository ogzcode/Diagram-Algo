import isVariable from "./isVariable";
import tokenizeForOperation from "./tokenizeForOperation";
import tokenizeForPrint from "./tokenizeForPrint";

function tokenizeCond(condArray, variableList) {
    const data = {
        "firstVar": null,
        "secondVar": null,
        "operator": ""
    };
    for (let i of condArray) {
        let v = isVariable(i, variableList);
        if (v) {
            if (data.firstVar == null) {
                data.firstVar = v.value;
            }
            else if (data.secondVar == null) {
                data.secondVar = v.value;
            }
            else {
                return false;
            }
        }
        else if ("><=!".includes(i)) {
            if (data.operator === "") {
                data.operator = i;
            }
        }
        else {
            let v = parseInt(i);
            if (Number.isInteger(v) && !isNaN(v)) {
                if (data.firstVar === null) {
                    data.firstVar = v;
                }
                else if (data.secondVar === null) {
                    data.secondVar = v;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }

    return data;
}

function calcCondition(condList, variableList, printTextList) {
    for (let i of condList) {
        if (i.type === "operation") {
            let res = tokenizeForOperation(i, variableList);

            if (res) {
                return res;
            }
        }
        else if (i.type === "print"){
            let res = tokenizeForPrint(i.value.split(" "), variableList);
            printTextList.push(res);
        }
    }
}

function tokenizeForCondition(operation, variableList, printTextList) {
    let result = tokenizeCond(operation.control.split(" "), variableList);
    if (!result) {
        return `Hata! > "${operation.control}" işlemi derlenemedi!!`;
    }

    const calc = (statementList, variableList, printTextList) => {
        let res = calcCondition(statementList, variableList, printTextList);

        if (res) {
            return res;
        }
    };

    if (result.operator === ">" && result.firstVar > result.secondVar) {
        calc(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "<" && result.firstVar < result.secondVar) {
        calc(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "=" && result.firstVar === result.secondVar) {
        calc(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "!" && result.firstVar !== result.secondVar) {
        calc(operation.statements, variableList, printTextList);
    }
}

export default tokenizeForCondition;