
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let tickAmount = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){    
        tickAmount = 0.05 / parseFloat(durationInput.value) * (perimeter + currentOffset);
    },
    onTick(){
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset -= tickAmount;
    },
    onComplete(){
        circle.setAttribute('stroke-dashoffset', -perimeter);
        currentOffset = 0;
    }
});