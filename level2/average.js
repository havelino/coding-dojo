

function average(arr){
return (arr.reduce((a,b)=>a+b))/arr.length;
}
let arr = [1,2,3,4,5,6,7];


console.log(average(arr));