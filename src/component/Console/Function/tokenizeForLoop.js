import tokenizeForOperation from "./tokenizeForOperation";

function tokenizeForLoop(d, variableList){
    for (let i = 0; i < d.value; i++){
        for (let j of d.statements){
            if (j.type === "operation"){
                let res = tokenizeForOperation(j, variableList);
                if (res){
                    return res;
                }
            }
        }
    }
}

export default tokenizeForLoop;