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

function calcConditionList(condList, variableList, printTextList) {
    for (let i of condList) {
        if (i.type === "operation") {
            let res = tokenizeForOperation(i, variableList);

            if (res) {
                printTextList.push(res);
                break;
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
    if (result === false) {
        printTextList.push(`Hata! > "${operation.control}" işlemi derlenemedi!!`);
        return;
    }

    if (result.operator === ">" && result.firstVar > result.secondVar) {
        calcConditionList(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "<" && result.firstVar < result.secondVar) {
        calcConditionList(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "=" && result.firstVar === result.secondVar) {
        calcConditionList(operation.statements, variableList, printTextList);
    }
    else if (result.operator === "!" && result.firstVar !== result.secondVar) {
        calcConditionList(operation.statements, variableList, printTextList);
    }
}

export default tokenizeForCondition;