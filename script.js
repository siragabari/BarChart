"use-strict";
window.addEventListener("load", createBarChart);

let timer;
let bars = [];
let customers = Array(40).fill(0);

// Creates an array of bars
function createBarChart() {
    for(let i=0; i<40; i++) {
        bars[i] = document.createElement('div');
        bars[i].id = i;
        bars[i].className = "bar";
        bars[i].style.height = 5 + "px";
    }
    timer = setInterval(updateCustomers, 400); // start loop
}

// Returns random number of customers
function getNumberOfCustomers() {
    return Math.floor(Math.random()*32);
}

// Changes the customers array
function updateCustomers() {
    customers.shift();
    customers.push(getNumberOfCustomers());
    drawBars(); // display
}

// Displays the bars
function drawBars() {
    for(let i=0; i<40; i++) {
        bars[i].style.height = 5 + customers[i]*5 + "px";
        document.getElementById("chart").appendChild(bars[i]);
    }
}

