const grid = document.querySelector(".container");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const colorPicker = document.querySelector(".color-picker");

let currentGridSize = gridSizeSlider.value;
let currentColor = colorPicker.value;

createGrid(currentGridSize);

gridSizeSlider.addEventListener("input", updateGrid);
colorPicker.addEventListener("input", updateColor);

function createGrid(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell")
            cell.style.height = `${400/gridSize}px`;
            cell.style.width = `${400/gridSize}px`;
            cell.addEventListener("mousedown", fillCell);
            cell.addEventListener("mouseover", fillCell);
    
            grid.appendChild(cell);
        }
    }

}

function removeGrid() {

    grid.innerHTML = ""

}

function updateGrid(e) {

    removeGrid();
    let updatedGridSize = e.target.value;
    createGrid(updatedGridSize);

}

function clearGrid() {

    removeGrid();
    currentGridSize = gridSizeSlider.value;
    createGrid(currentGridSize);
    
}

function updateColor(e) {

    currentColor = e.target.value;

}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function fillCell(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return
    }

    let currentCell = e.target;

    currentCell.style.backgroundColor = currentColor;
}