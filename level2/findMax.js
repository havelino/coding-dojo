function findMax(arr){
    return arr.reduce((a,b)=> Math.max(a,b));
}

console.log(findMax([4,5,8,,8,0,1,45,2,6,9,2]));