//resetting variables
let squaresUpdated =  0
let update = true

//canvas variables. Recommended to have ratio of 1:1
let canvasx = 480
let canvasy = 480

//grid variables
let gridx = 10
let gridy = 10
let boxx = canvasx/gridx
let boxy = canvasy/gridy

//generating variables
let startboxx = 0
let startboxy = 0



function setup() {
    createCanvas(480, 480);
    noStroke()
}

function draw() {
    //GENERATE THE GRID
    for(let gy = 0; gy < gridy; gy++) {
        for(let gx = 0; gx < gridx; gx++) {
            rect(gx*boxx, gy*boxy, boxx, boxy)
        }
    }

    //PROCEDURALLY GENERATING
    //generate a starting box
    startboxx = Math.floor(random()*gridx)
    startboxy = Math.floor(random()*gridy)

}