function letterSoup(word){
    return word.split('').sort().join('');
}

console.log(letterSoup('casa'))