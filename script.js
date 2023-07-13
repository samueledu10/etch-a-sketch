"use strict"

function changeColor(square) {
    square.addEventListener("mouseover", () => {
        square.classList.add("black");
    });

}

let gridSize = 16;

const container = document.querySelector(".container");

// array that holds the gridSize x gridSize grid
//let grid = [];

// create div element to fill grid
for (let row = 0; row < gridSize; ++row) {
    //grid.push([]);

    for (let column = 0; column < gridSize; ++column ) {
        let square = document.createElement("div");
        square.classList.add("square");
        //grid[row].push(square);
        container.appendChild(square);
    }
}

let squares = document.querySelectorAll(".square");
squares.forEach(changeColor);