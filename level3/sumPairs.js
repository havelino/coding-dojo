function getPairs(num){
    let pairs=[];
    for(let i=0;i<num;i++){
        pairs.push([num-i,i]);
    }
    return pairs;
}

console.log(getPairs(10));