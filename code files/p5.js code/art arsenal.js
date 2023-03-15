//resetting variables
let squaresUpdated =  0
let updatesqr = true
let startbox = false

//canvas variables. Recommended to have ratio of 1:1
let canvasx = 480
let canvasy = 480

//grid variables. The higher gridx and gridy are, the higher the resolution,
//but the slower the generation
let gridx = 500
let gridy = 500
let boxx = canvasx/gridx
let boxy = canvasy/gridy

//generating variables
let startboxx = 0
let startboxy = 0

let nowbox = []
let nextboxposx = []
let nextboxposy = []

let boxposesx = []
let boxposesy = []



function setup() {
    createCanvas(480, 480);
    noStroke()

    startboxx = Math.floor(random()*gridx)
    startboxy = Math.floor(random()*gridy)
    nowbox.push(startboxx,startboxy)
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
    console.log(startboxx)

    //--> generate other boxes
    nextboxposx.push(nowbox[0]-1,nowbox[0]+1)
    nextboxposy.push(nowbox[1]-1,nowbox[1]+1)
    console.log(nextboxposx[0])

    nowbox[0] = nextboxposx[Math.floor(random()*nextboxposx.length-1)]
    nowbox[1] = nextboxposy[Math.floor(random()*nextboxposy.length-1)]

    for(let i=0; i<100; i++) {
        boxposesx.push(nowbox[0])

        rect(boxposesx[i]*boxx,boxposesx[i]*boxy,boxx,boxy)
    }


}