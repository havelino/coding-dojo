//deleteDuplicated.js
function deleteDuplicated(arr){
    let obj={};
    for(let k of arr){
        obj['v'+k]=k;
    }
    return Object.keys(obj).map(function(key) {
        return obj[key];
      });
}


console.log(deleteDuplicated([5,8,6,3,7,1,1,5,7,9,5,4]));
