const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const squares = 600;

for (let i = 0; i < squares; i++) {
  const sqr = document.createElement("div");
  sqr.classList.add("square");
  container.appendChild(sqr);

  sqr.addEventListener("mouseover", () => {
    setColorElement(sqr);
  });

  sqr.addEventListener("mouseout", () => {
    removeColorElemnt(sqr);
  });
}
function setColorElement(element) {
  color = getRandomColor();
  element.style.background = "color";
  element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
}
function removeColorElemnt(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
