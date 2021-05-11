export function convertToNumber(userString) {
let num = parseFloat(userString);
if(num) {
    return num;
} else {
    return "Please enter a number."
}
}
}