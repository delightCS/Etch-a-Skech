const container = document.querySelector(".container");

function creategrid(gridSize) {
  document.documentElement.style.setProperty("--divisor", gridSize);
  container.innerHTML = "";

  const totalCell = gridSize ** 2;
  for (let i = 0; i < totalCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

function changeCellNum() {
  const numInput = document.querySelector("input").value;

  if (numInput >= 1 && numInput <= 100) {
    creategrid(numInput);
  } else {
    alert("Input a number between 1 and 100.");
  }
}

const createGridButton = document.querySelector("button");
createGridButton.addEventListener("click", changeCellNum);

document.addEventListener("DOMContentLoaded", () => {
  creategrid(16);
});
