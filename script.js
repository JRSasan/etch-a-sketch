const grid = document.querySelector(".container");
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.height = `${400/16}px`;
        cell.style.width = `${400/16}px`;

        grid.appendChild(cell);
    }
}

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((gridCell) => {

    gridCell.addEventListener("mousedown", fillToBlack);
    gridCell.addEventListener("mouseover", fillToBlack);

});


function fillToBlack(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return
    }

    let currentCell = e.target;

    currentCell.style.backgroundColor = "black";
}