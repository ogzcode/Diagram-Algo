import tokenizeForOperation from "./tokenizeForOperation";
import tokenizeForPrint from "./tokenizeForPrint";
import tokenizeForCondition from "./tokenizeForCondition";
import isVariable from "./isVariable";

function calcLoopStatement(statementList, variableList, printTextList) {
    for (let i of statementList) {
        if (i.type === "operation") {
            let res = tokenizeForOperation(i, variableList);
            if (res) {
                printTextList.push(res);
                return;
            }
        }
        else if (i.type === "print"){
            let res = tokenizeForPrint(i.value.split(" "), variableList);
            printTextList.push(res);
        }
        else if (i.type === "statement"){
            tokenizeForCondition(i, variableList, printTextList);
        }
    }
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function tokenizeForLoop(d, variableList, printTextList) {
    let count = parseInt(d.value);

    if (isNaN(count)){
        count = isVariable(d.value, variableList);

        if (count === false){
            printTextList.push(`Hata! > "${d.value}" değişkeni bulunamadı!!`);
            return;
        }
    }

    if (isNumeric(d.value)){
        count = d.value;
    }
    else {
        printTextList.push(`Hata! > "${d.value}" işlemi derlenemedi!!`);
        return;
    }
    
    for (let i = 0; i < count.value; i++) {
        calcLoopStatement(d.statements, variableList, printTextList)
    }
}

export default tokenizeForLoop;