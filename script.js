const grid = document.querySelector(".container");
const gridSizeSlider = document.querySelector(".grid-size-slider");

let initialGridSize = gridSizeSlider.value;

createGrid(initialGridSize);

gridSizeSlider.addEventListener("input", updateGrid)

function createGrid(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell")
            cell.style.height = `${400/gridSize}px`;
            cell.style.width = `${400/gridSize}px`;
            cell.addEventListener("mousedown", fillToBlack);
            cell.addEventListener("mouseover", fillToBlack);
    
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
    let currentGridSize = gridSizeSlider.value
    createGrid(currentGridSize);
    
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function fillToBlack(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return
    }

    let currentCell = e.target;

    currentCell.style.backgroundColor = "black";
}