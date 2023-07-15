"use strict"

function changeColor(square) {
    square.addEventListener("mouseover", () => {
        square.classList.add("black");
    });

}

function createGrid(size) {
    let containerSize = 480;
    const container = document.querySelector(".container");
    //container.setAttribute("height", `${containerSize}`);
    //container.setAttribute("width", `${containerSize}px`);

    // if grid already exists, delete it
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.remove());

    for (let row = 0; row < size; ++row) {

        for (let column = 0; column < size; ++column ) {
            let square = document.createElement("div");
            square.style.height = `${containerSize / size}px`;
            square.style.width = `${containerSize / size}px`;
            square.classList.add("square");
            container.appendChild(square);
            changeColor(square);
        }
    }
}
let gridSize = 32; //16

//ask user to choose number of square on grid
let resize = document.createElement("button");
resize.classList.add("btn");
resize.textContent = "Resize";

resize.addEventListener("click", () => {
    gridSize = 0;
    while(gridSize < 16 || gridSize > 100) {
        gridSize = +prompt("Number of square on grid", "16-100");
    }
    createGrid(gridSize);
    console.log(gridSize);
});

createGrid(gridSize);

//change color when mouse hover
let squares = document.querySelectorAll(".square");
squares.forEach(changeColor);

document.body.appendChild(resize);

// create div element to fill grid
// for (let row = 0; row < gridSize; ++row) {

//     for (let column = 0; column < gridSize; ++column ) {
//         let square = document.createElement("div");
//         //square.cssText = `height: ${gridSize/containerSize}px; width: ${gridSize/containerSize}px`;
//         square.classList.add("square");
//         container.appendChild(square);
//     }
// }