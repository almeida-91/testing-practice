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