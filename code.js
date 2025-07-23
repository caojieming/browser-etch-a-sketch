const grid = document.querySelector("#grid");

// creating all square divs
for(let i = 1; i <= (16*16); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = "square" + i;
    grid.appendChild(square);
}


