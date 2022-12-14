function getLength(list) {
    let len = list.length;

    for (let i of list) {
        if (i.type === "loop") {
            len += i.statements.length;
        }
        else if (i.type === "statement") {
            len += i.statements.length;
        }
    }
    return len;
}

export default getLength;