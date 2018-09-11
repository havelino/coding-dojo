//matrix addition

function sumMatrix(a,b){
    let result =[]
    for (const i in a) {
        let row =[]
        for (const j in a[i]) {
            //console.log(`A(${i},${j})=`,a[i][j]+b[i][j]);
            row.push(a[i][j]+b[i][j]);
        }
        result.push(row);
    }
    return result;
}


let A = [
    [2,0,1],
    [3,0,0],
    [5,1,1]
    ];

let B = [
    [1,0,1],
    [1,2,1],
    [1,1,0]
    ];

console.log(sumMatrix(A,B));