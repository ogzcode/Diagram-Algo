function isVariable(name, variableList){
    for (let v of variableList){
        if (v.name === name){
            return v;
        }
    }

    return false;
}

export default isVariable;