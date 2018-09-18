

function powerOfTwo(num){
    if(num===2){
        return true;
    }else{
        if(num%2!=0){
            return false
        }else{
            return powerOfTwo(num/2);
        }
    }
}

console.log(powerOfTwo(1024));