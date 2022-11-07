import isVariable from "./isVariable";

function tokenizeForPrint(stringList, variableList){
    let result = [];
    for (let string of stringList){
        let v = isVariable(string.slice(1), variableList);
        if (string[0] === "$"){
            if (v){
                result.push(v.value);
            }
            else {
                result = result.splice();
                result.push(`Error ${string.slice(1)} is not define`);
                break;
            }
        }
        else {
            result.push(string);
        }
    }

    return result.join(" ");
}

export default tokenizeForPrint;