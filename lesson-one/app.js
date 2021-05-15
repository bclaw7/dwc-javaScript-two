import {calculateCircumference, calculateArea} from './circleCalc.js';
import {convertToNumber} from './validation.js';
import {} from './display.js'
/*
document.querySelector('#circumferenceButton').onclick = submitFunction;
document.querySelector('#areaButton').onclick = submitAreaFunction;
*/
document.querySelector('#submitButton').addEventListener("click", function() {
    submitFunction('circumference');
}, false);
document.querySelector('#submitAreaButton').addEventListener("click", function() {
    submitFunction('area');
}, false);


function submitFunction(calculationType) {
    
    if(calculationType === 'circumference') {
        let userRadius = convertToNumber(document.getElementById("area").value);
        let outputElement = document.getElementById('outputCircumference');
    }
    
    if(userRadius) {
        if(calculationType)
        let circumference = calculateCircumference(userRadius)
        outputElement.innerHTML = 'The circumference is ${circumference}.';
    } else {
        outputElement.innerHTML = 'Please enter a valid number.'
    }
}

   

