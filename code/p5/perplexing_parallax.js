//parralax effect variables
let x1
let x2
let x3

let y1
let y2
let y3

let parmod1x
let parmod2x
let parmod3x
let parmod1y
let parmod2y
let parmod3y

//box style
let box1c
let box2c
let box3c

let boxlx
let boxly


function setup() {
    createCanvas(500, 500);
    noStroke()

    //initializing variables
    parmod1x = random()
    parmod2x = random()
    parmod3x = random()
    parmod1y = random()
    parmod2y = random()
    parmod3y = random()

    box1c = [random()*255,random()*255,random()*255]
    box2c = [random()*255,random()*255,random()*255]
    box3c = [random()*255,random()*255,random()*255]

    x1 = random()*500
    x2 = random()*500
    x3 = random()*500
    y1 = random()*500
    y2 = random()*500
    y3 = random()*500

    boxlx = random()*300
    boxly = random()*300
}

function draw() {
    ellipse()
    let pmx1 = mouseX * parmod1x
    let pmx2 = mouseX * parmod2x
    let pmx3 = mouseX * parmod3x
    let pmy1 = mouseY * parmod1y
    let pmy2 = mouseY * parmod2y
    let pmy3 = mouseY * parmod3y


    //update parallax effects
    addEventListener("mousemove", (event) => {});

    onmousemove = (event) => {
        x1 = -pmx1 + 250
        x2 = -pmx2 + 300
        x3 = -pmx3 + 400
        y1 = 250 - pmy1
        y2 = 300 - pmy2
        y3 = 400 - pmy3
    };

    background(0,0,0);
    fill(box1c[0],box1c[1],box1c[2])
    rect(x1,y1,boxlx,boxly)

    fill(box2c[0],box2c[1],box2c[2])
    rect(x2,y2,boxlx,boxly)

    fill(box3c[0],box3c[1],box3c[2])
    rect(x3,y3,boxlx,boxly)
}