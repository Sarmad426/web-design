const canvas = document.getElementById("drawingBoard");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let painting = false;
let brushColor = "#000000";
let brushSize = 5;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

const colorPicker = document.getElementById("colorPicker");

if (window.getComputedStyle(canvas).backgroundColor == "rgb(51, 51, 51)") {
  colorPicker.value = "#ffffff";
  brushColor = colorPicker.value;
} else {
  colorPicker.value = "#000000";
  brushColor = colorPicker.value;
}

console.log("BG color", window.getComputedStyle(canvas).backgroundColor);

colorPicker.addEventListener("change", (e) => {
  brushColor = e.target.value;
});

document.getElementById("brushSize").addEventListener("change", (e) => {
  brushSize = e.target.value;
});
