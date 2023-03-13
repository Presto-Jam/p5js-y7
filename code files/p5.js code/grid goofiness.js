//grid dimentions
let gridamt = 4
let boxsize = 400/gridamt

//colors
let rgb = 255
let colorChance = 50 //0 to 100

//reseting variables
let boxesgen = 0
let boxchecknum = 0

function setup() {
  createCanvas(480, 480);
  background(225,225,225);
}

function draw() {
  //generate the grid
  //noStroke()
  for(let a=0; a<gridamt; a++) {
    if(boxesgen == gridamt) {
      boxesgen = 0
    }

    for(let b=0; b<gridamt; b++) {
      fill(255,255,255)
      rect(b*boxsize,a*boxsize,boxsize,boxsize)
      boxesgen++
    }
  }

  //change box color on mouse hover
  for(let column = 0; column < gridamt; column++) {
    for(let row = 0; row < gridamt; row++) {
      //update the boxchecknum
      boxchecknum = row + column*gridamt

      if(mouseX < boxsize*row && mouseY < boxsize*column && mouseX > boxsize*(row-1) && mouseY > boxsize*(column-1)) {
        console.log(true)
        fill(0,0,0)
        rect(mouseX,boxsize*(column-1),boxsize,boxsize)
      }
    }
  }
  // if(mouseX < boxsize*row && mouseY < boxsize*row) {
  //       fill(random()*255,random()*255,random()*255)
  //       rect(boxsize*row, boxsize*column, boxsize,boxsize)
  //     }


}