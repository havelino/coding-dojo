
function integral(start,end,step,fn){
    let result = 0;
    for(i=start;i<=end;i+=step){
        result += fn(i)*step;
    }
    return result;
}


console.log(integral(-3.14159,3.14159,0.001,(x)=>Math.cos(x)));