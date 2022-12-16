import tokenizeForOperation from "./tokenizeForOperation";
import tokenizeForPrint from "./tokenizeForPrint";
import tokenizeForCondition from "./tokenizeForCondition";

function calcLoopStatement(statementList, variableList, printTextList) {
    for (let i of statementList) {
        if (i.type === "operation") {
            let res = tokenizeForOperation(i, variableList);
            if (res) {
                printTextList.push(res);
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


function tokenizeForLoop(d, variableList, printTextList) {
    for (let i = 0; i < d.value; i++) {
        calcLoopStatement(d.statements, variableList, printTextList)
    }
}

export default tokenizeForLoop;