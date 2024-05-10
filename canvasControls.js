const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(evt.clientX - rect.left),
    y: Math.floor(evt.clientY - rect.top)
  };
}
let initialPos = [0, 0]
document.addEventListener('mousemove', (e) => console.log(getMousePos(canvas, e)))
document.addEventListener("mousedown", (e) => {
    let pos = getMousePos(canvas, e)
    if (initialPos[0] === 0 && initialPos[1] === 0) {
      initialPos[0] = pos['x']
      initialPos[1] = pos['y']
  }
    
    ctx.beginPath()
    ctx.moveTo(initialPos[0],initialPos[1])
    ctx.lineTo(pos['x'],pos['y'])
    ctx.closePath()
    ctx.stroke()
    initialPos[0] = pos['x']
    initialPos[1] = pos['y']
    return
})

document.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key === "Escape") initialPos = [0, 0]
  if (e.key === "Delete") ctx.clearRect(0, 0, 600, 600)
  return
})
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
