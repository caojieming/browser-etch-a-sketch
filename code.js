const GRID_SIZE = 750;
const grid = document.querySelector("#grid");
grid.style.width = GRID_SIZE + "px";

// creating all square divs
let sideNum = 16
function createGrid() {
    for(let i = 1; i <= (sideNum**2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = "square" + i;
        square.style.width = Math.floor(GRID_SIZE / sideNum) + "px";
        square.style.height = Math.floor(GRID_SIZE / sideNum) + "px";
        console.log(Math.floor(GRID_SIZE / sideNum));
        grid.appendChild(square);
    }
}
// call it once globally to init
createGrid();


// hover trail effect
let squares = document.getElementsByClassName("square");

function grayOver() {
    this.style.backgroundColor = "gray";
}

function activateTrailFX() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", grayOver);
    }
}
// call it once globally to enable
activateTrailFX();


// extra function to delete all squares in grid
function deleteSquares() {
    while(squares.length > 0) {
        squares[0].remove();
    }
}


// change grid resolution
function resolutionChange() {
    let input = prompt("The grid will become N by N squares, N being the number you input. You must input a valid number, otherwise nothing will happen. (Values higher than 99 are ignored just to be safe.)");
    if(Number(input) > 0 && Number(input) < 100) {
        // delete all current squares
        deleteSquares();

        // generate new squares
        sideNum = input;
        createGrid()
        squares = document.getElementsByClassName("square");
        activateTrailFX()
    }
}

const changeBtn = document.querySelector("#changeBtn");
changeBtn.addEventListener("click", resolutionChange);
