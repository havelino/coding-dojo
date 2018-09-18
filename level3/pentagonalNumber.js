function pentagonalNumber(num){
    if(num<=1){
        return 1;
    }else{
        return 5*(num-1)*pentagonalNumber(num-1);
    }
}

console.log(pentagonalNumber(1));