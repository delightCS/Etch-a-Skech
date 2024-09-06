// const container = document.querySelector(".container");

// let isDragging = false;

// const colorInput = document.querySelector("input");

// const btn = document.querySelector("button");

// for (let i = 0; i < 16 * 16; i++) {
//   const cell = document.createElement("div");
//   cell.setAttribute("style", "border: 1px solid gray; height: 37.5px");
//   container.appendChild(cell);

//   cell.addEventListener("mousedown", function (event) {
//     isDragging = true;
//   });

//   cell.addEventListener("mousemove", function (event) {
//     if (isDragging) {
//       cell.style.backgroundColor = colorInput.value;
//     }
//   });

//   cell.addEventListener("mouseup", function () {
//     if (isDragging) {
//       isDragging = false;
//     }
//   });

const container = document.querySelector(".container");
const getCell = document.querySelector("input");

let size = b;
for (let i = 0; i < size; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  container.appendChild(cell);
}
