function multiplication(a,b){
    let result=[];
    for(let i=0;i<a.length;i++){//rows
        let row=[];
        for(let j=0;j<b.length;j++){//collumns
            let v=0;
            for(let k=0;k<a[i].length;k++){
                v+=a[i][k]*b[k][j];
            }
            console.log('C('+i+','+j+')',v);
            row.push(v);
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

console.log(multiplication(A,B));
/*[ 
  [ 3, 1, 2 ], 
  [ 3, 0, 3 ], 
  [ 7, 3, 6 ] 
  ]*/


