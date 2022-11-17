import isVariable from "./isVariable";

function prec(x) {
    if (x === "+" || x === "-") {
        return 1;
    }
    else if (x === "*" || x === "/" || x === "%") {
        return 2;
    }
    else {
        return -1;
    }
}

function infixToPostfix(state) {
    let stack = [];
    let result = "";
    let resultList = [];

    for (let i = 0; i < state.length; i++) {
        let c = state[i];

        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
            result += c;
        }
        else {
            resultList.push(result);
            result = "";
            while (stack.length !== 0 && prec(c) <= prec(stack[stack.length - 1])) {
                resultList.push(stack[stack.length - 1]);
                stack.pop();
            }
            stack.push(c);
        }
    }
    resultList.push(result);
    while (stack.length !== 0) {
        resultList.push(stack[stack.length - 1]);
        stack.pop();
    }

    return resultList;
}

function calcExpression(ex, variableList) {
    let stack = [];

    for (let i of ex) {
        let n = parseInt(i);
        if (n) {
            stack.push(n);
        }
        else if ("+-*/%".includes(i)) {
            let numberTwo = stack.pop();
            let numberOne = stack.pop();

            if (i === "+") {
                stack.push(numberOne + numberTwo);
            }
            else if (i === "-") {
                stack.push(numberOne - numberTwo);
            }
            else if (i === "*") {
                stack.push(numberOne * numberTwo);
            }
            else if (i === "/") {
                stack.push(numberOne / numberTwo);
            }
            else if (i === "%") {
                stack.push(numberOne % numberTwo);
            }
        }
        else {
            let v = isVariable(i, variableList);

            if (v) {
                stack.push(v.value);
            }
            else {
                return false;
            }
        }
    }
    return stack[0];
}

function tokenizeForOperation(operation, variableList){
    let post = infixToPostfix(operation.prosses);
    let calc = calcExpression(post, variableList);
    let result = isVariable(operation.result, variableList);

    if (!calc){
        return false;
    }

    if (result) {
        let index = variableList.indexOf(result);
        variableList[index].value = calc;
    }
    else {
        return false;
    }
}

export default tokenizeForOperation;