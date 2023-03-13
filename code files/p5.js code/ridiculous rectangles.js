//preset variables
let canvasx = 400; //canvas x length
let canvasy = 400; //canvas y length
let boxamt = 100; //amount of boxes on screen
let boxsizex = canvasx/boxamt; //AUTO-CALC: box x length

let maxred = 20; //maximum RED amount in RGB color randomization
let maxgreen = 230; //maximum GREEN amount in RGB color randomization
let maxblue = 180; //maximum BLUE amount in RGB color randomization



function setup() {
  createCanvas(canvasx, canvasy); //creates a canvas
}

function draw() {
  for(let i = 0; i < boxamt; i++) {
      fill(random()*maxred, random()*maxgreen, random()*maxblue);
      strokeWeight(0);
      rect(i*boxsizex, 0, boxsizex,random()*canvasy);
  }
}