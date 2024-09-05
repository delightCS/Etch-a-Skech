const container = document.querySelector(".container");

for (i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.setAttribute("style", "border: 1px solid gray; height: 37.5px");
  container.appendChild(cell);
}
