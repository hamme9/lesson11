'use strict';

const areaColor = document.querySelector('#text');
const circleStyle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const btnCircle = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const spanRange = document.querySelector('#range-span');

btn.addEventListener('click', function(e){
    console.log('change');
    console.dir(areaColor);
    circleStyle.style.backgroundColor = areaColor.value;
});

btnCircle.style = 'display: none;';

inputRange.addEventListener('input', function(e) {
    spanRange.textContent = e.target.value;
    circleStyle.style.height = e.target.value + '%'; 
    circleStyle.style.width = e.target.value + '%'; 
});





