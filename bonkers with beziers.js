let cursorx = 100
let cursory = 100
let canvasx = 800
let canvasy = 800

let lineamt = 100

let linebgr = 255
let linebgg = 255
let linebgb = 255

function setup() {
  createCanvas(canvasx,canvasy)
}

function draw() {
  //hide the cursor
  noCursor()

  //setup the positions
  let mposx = mouseX;
  let mposy = mouseY;
  let cursorposx = mposx
  let cursorposy = mposy

  //setup the shape
  fill(255,255,255)
  noStroke()
  background(0, 0, 0, 60)
  ellipse(cursorposx,cursorposy,30,30)

  //Bezier curve
  noFill()
  stroke(255,255,255);
  strokeWeight(1.5)
  for (let i = 0; i < lineamt*10; i=i+10) {
    stroke(random()*linebgr, random()*linebgg, random()*linebgb)
    bezier(i, i, cursorposx, cursorposy, cursorposx, cursorposy, canvasx, canvasy);
  }

}
