

function toArabig(romanNumber){
    let result=0;
    if(romanNumber.indexOf('IV')>0){
        result+=4;romanNumber = romanNumber.replace('IV','');
    }
    if(romanNumber.indexOf('IX')>0){
        result+=9;romanNumber = romanNumber.replace('IX','');
    }
    if(romanNumber.indexOf('XL')>0){
        result+=40;romanNumber = romanNumber.replace('XL','');
    }
    if(romanNumber.indexOf('XC')>0){
        result+=90;romanNumber = romanNumber.replace('XC','');
    }
    if(romanNumber.indexOf('CD')>0){
        result+=400;romanNumber = romanNumber.replace('CD','');
    }
    if(romanNumber.indexOf('CM')>0){
        result+=900;romanNumber = romanNumber.replace('CM','');
    }
    
    let values = romanNumber.split('');
    
    for(let v of values){
        switch (v) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;

            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
        
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            
            default:
                break;
        }
    }
    return result;
}
console.log(toArabig('MMCMXCIX'));//2999