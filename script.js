export function capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase();
    string = string.slice(1).toLowerCase();
    let result = firstLetter.concat(string);
    return result;
}

export function reverseString(string){
    let result = string.split("");
    result = result.reverse();
    result = result.join("");
    return result;
}

export let Calculator = {
    add : function add(number1,number2){
            return number1 + number2;
    },
    subtract : function subtract(number1,number2){ 
        return number1-number2
    },
    divide : function divide(number1,number2){
        if (number2 == 0) return 'ERROR';
        return number1/number2;
    },
    multiply : function multiply(number1,number2){
        return number1*number2;
    }
    }

export function caesarCipher(string, k){
    let stringArray = string.split('');
    let resultArray = [];
    for (let i = 0 ; i < stringArray.length; i++){
        let indexString = stringArray[i].charCodeAt();
        if (indexString >= 97 && indexString <= 122){
            indexString = cipherLowerCase(indexString,k);
            resultArray.push(String.fromCharCode(indexString));
        } else if (indexString >= 65 && indexString <= 90){
            indexString = cipherUpperCase(indexString,k);
            resultArray.push(String.fromCharCode(indexString));
        } else {
            resultArray.push(String.fromCharCode(indexString));
        }
    }
    let resultString = resultArray.join('');
    return resultString;
}

function cipherLowerCase(charCode,k){
    let result = (charCode+k);
    if (result > 122){
        result %= 122;
        if (result >= 1 && result <= 97) result += 96;
    }
    return result;
}

function cipherUpperCase(charCode,k){
    let result = (charCode+k)
    if (result > 90){
        result %= 90;
        if (result >= 1 && result < 90) result += 89;
    }
    return result;
}

export function analyzeArray(array){
    let result = {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    };
    return result;
}

function getMin(array){
    array.sort((a,b)=>{return a - b});
    return array[0];
}

function getMax(array){
    array.sort((a,b)=>{return a - b});
    return array[array.length-1];
}

function getAverage(array){
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++){
        sum += array[i];
    }
    return sum/array.length;
}