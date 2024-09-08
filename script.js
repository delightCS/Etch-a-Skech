const container = document.querySelector(".container");
selectedColor = "#000";

function creategrid(gridSize) {
  document.documentElement.style.setProperty("--divisor", gridSize);
  container.innerHTML = "";

  const totalCell = gridSize ** 2;
  for (let i = 0; i < totalCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mousemove", () => {
      cell.style.backgroundColor = selectedColor;
    });

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

const colorInput = document.querySelector("#colorInput");
colorInput.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});

const createGridButton = document.querySelector("button");
createGridButton.addEventListener("click", changeCellNum);

document.addEventListener("DOMContentLoaded", () => {
  creategrid(16);
});
