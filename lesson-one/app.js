import {calculateCircumference, calculateArea} from './circleCalc.js';
import {convertToNumber} from './validation.js';

document.querySelector('#circumferenceButton').onclick = submitFunction;
document.querySelector('#areaButton').onclick = submitAreaFunction;

function submitFunction() {
    let UserRadius = convertToNumber(document.getElementById("radiusCircumference").value);
    let outputElement = document.getElementById('outputCircumference');
    if(UserRadius) {
        let circumference = calculateCircumference(userRadius)
        outputElement.innerHTML = 'The circumference is ${circumference}.';
    } else {
        outputElement.innerHTML = 'Please enter a valid number.'
    }
}

    function submitAreaFunction() {
        let UserRadius = convertToNumber(document.getElementById("radiusArea").value);
        let outputElement = document.getElementById('outputArea');
        if(UserRadius) {
            let area = calculateArea(userRadius)
            outputElement.innerHTML = 'The area is ${area}.';
        } else {
            outputElement.innerHTML = 'Please enter a valid number.'
        }
    }

