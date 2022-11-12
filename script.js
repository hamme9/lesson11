'use strict';

const areaColor = document.querySelector('#text');
const circleStyle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const btnCircle = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const spanRange = document.querySelector('#range-span');

const changeColor = function() {
    console.log('change');
    console.dir(areaColor);
    circleStyle.style.backgroundColor = areaColor.value;
};

const changeSizeCircle = function(e) {
    spanRange.textContent = e.target.value + '%';
    circleStyle.style.height = e.target.value + '%'; 
    circleStyle.style.width = e.target.value + '%'; 
};

spanRange.textContent = inputRange.value + '%';
circleStyle.style.height = inputRange.value + '%';
circleStyle.style.width = inputRange.value + '%';

btnCircle.style = 'display: none;';

btn.addEventListener('click', changeColor);
inputRange.addEventListener('input', changeSizeCircle);






