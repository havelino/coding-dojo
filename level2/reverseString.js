//reversestring.js

function reverseString(word){
    let arr = word.split('');
    let reverse = '';
    for(let w of arr){
        reverse = w+reverse;
    }
    return reverse; 
}


console.log(reverseString('severla'));