/*
    Gelen veri içerisinde kaç adet şekil olduğunu tespit eder.
*/

function getLength(list) {
    let len = list.length;

    for (let i of list) {
        if (i.type === "loop") {
            len += i.statements.length;
            for (let j of i.statements){
                if (j.type === "statement"){
                    len += j.statements.length;
                }
            }
        }
        else if (i.type === "statement") {
            len += i.statements.length;
        }
    }
    return len;
}

export default getLength;