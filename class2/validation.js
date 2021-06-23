export function convertToNumber(userString) {
    if(isNaN(userString) || userString === "") {
        return null;
    } else {
        return parseFloat(userString);
    }
}