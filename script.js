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

export function caesarCypher(string){
    let stringArray = string.split('');
    
}