//resetting variables
let squaresUpdated =  0
let updatesqr = true
let startbox = false

//canvas variables. Recommended to have ratio of 1:1
let canvasx = 480
let canvasy = 480

//grid variables
let gridx = 4
let gridy = 4
let boxx = canvasx/gridx
let boxy = canvasy/gridy

//generating variables
let startboxx = 0
let startboxy = 0

let nowbox = []



function setup() {
    createCanvas(480, 480);
    //noStroke()

    startboxx = Math.floor(random()*gridx)
    startboxy = Math.floor(random()*gridy)
}

function draw() {
    //GENERATE THE GRID
    for(let gy = 0; gy < gridy; gy++) {
        for(let gx = 0; gx < gridx; gx++) {
            fill(255,255,255)
            rect(gx*boxx, gy*boxy, boxx, boxy)
        }
    }

    //PROCEDURALLY GENERATING
    //generate a starting box
    fill(0,0,0)
    rect(startboxx*boxx,startboxy*boxy,boxx,boxy)

    //update nowbox
    nowbox.push(startboxx,startboxy)

    //generate other boxes

}