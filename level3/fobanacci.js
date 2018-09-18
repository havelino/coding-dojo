function fobanacci(number){
    if(number <=0){
    return 0
    }else{
     return fobanacci(number-1)+number;
    }
  }

  console.log(fobanacci(40));