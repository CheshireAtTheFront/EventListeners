'use strict';

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const rangeSpan = document.getElementById('range-span');
const range = document.getElementById('range');
const circle = document.getElementById('circle');

const changeColorSquare = function() {
	square.style.backgroundColor = text.value;
}

const circleSize = function(event) {
	rangeSpan.textContent = event.target.value;
	let valueSpan = rangeSpan.textContent;
	valueSpan = event.target.value;
	circle.style.width = `${valueSpan}` + "%";
	circle.style.height  = `${valueSpan}` + "%";
}

btn.addEventListener('click', changeColorSquare);
range.addEventListener('input', circleSize);
range.addEventListener('chenge', circleSize);

eBtn.style = "display: none;"