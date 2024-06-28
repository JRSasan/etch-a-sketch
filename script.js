const grid = document.querySelector(".container");
const gridSizeSlider = document.querySelector(".grid-size-slider");
const colorPicker = document.querySelector(".color-picker");
const clearButton = document.querySelector(".clear-button");
const colorModeButton = document.querySelector(".color-mode");
const eraserModeButton = document.querySelector(".eraser-mode");
const rainbowModeButton = document.querySelector(".rainbow-mode");
const gridSizeDisplay = document.querySelector(".grid-size");

let currentGridSize = gridSizeSlider.value;
let currentColor = colorPicker.value;
let currentMode = "color";

createGrid(currentGridSize);

gridSizeSlider.addEventListener("input", updateGrid);
colorPicker.addEventListener("input", updateColor);
clearButton.addEventListener("click", clearGrid);
colorModeButton.addEventListener("click", updateMode);
eraserModeButton.addEventListener("click", updateMode);
rainbowModeButton.addEventListener("click", updateMode);

function createGrid(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell")
            cell.style.height = `${500/gridSize}px`;
            cell.style.width = `${500/gridSize}px`;
            cell.addEventListener("mousedown", fillCell);
            cell.addEventListener("mouseover", fillCell);
    
            grid.appendChild(cell);
            setGridSizeDisplay(gridSize);
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
    setGridSizeDisplay(updatedGridSize);

}

function clearGrid() {

    removeGrid();
    currentGridSize = gridSizeSlider.value;
    createGrid(currentGridSize);
    
}

function updateColor(e) {

    currentColor = e.target.value;

}

function updateMode(e) {

    let newMode = e.target.value;
    currentMode = newMode;

}

function setGridSizeDisplay(gridSize) {

    gridSizeDisplay.textContent = `${gridSize} X ${gridSize}`
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function fillCell(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return
    }

    let currentCell = e.target;

    if (currentMode === "color") {
        currentCell.style.backgroundColor = currentColor;
    } else if (currentMode === "eraser") {
        currentCell.style.backgroundColor = "#FFFAE7";
    } else if (currentMode === "rainbow") {
        let randomR = Math.random() * 256;
        let randomG = Math.random() * 256;
        let randomB = Math.random() * 256;

        currentCell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}