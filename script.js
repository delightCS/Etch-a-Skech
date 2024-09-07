const container = document.querySelector(".container");

function changeCellNum() {
  const input = document.querySelector("input").value;

  if (input >= 1 && input <= 100) {
    document.documentElement.style.setProperty("--divisor", input);
    container.innerHTML = "";

    const totalCell = input ** 2;
    for (let i = 0; i < totalCell; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  } else {
    alert("Input a number between 1 and 100.");
  }
}

const createGrid = document.querySelector("button");
createGrid.addEventListener("click", changeCellNum);
