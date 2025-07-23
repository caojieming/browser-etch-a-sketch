const grid = document.querySelector("#grid");

// creating all square divs
for(let i = 1; i <= (16*16); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = "square" + i;
    grid.appendChild(square);
}

// hover trail effect
const squares = document.getElementsByClassName("square");

function grayOver() {
    this.style.backgroundColor = "gray";
}

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", grayOver);
}
