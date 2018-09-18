function chicharronero(a,b,c){
    let x = -1*b/(2*a);
    let y = Math.sqrt(b*b-4*a*c)/(2*a);
    return [x+y,x-y];
}

console.log(chicharronero(1,-6,9));