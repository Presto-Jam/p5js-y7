//parralax effect variables
let x1 = 250
let x2 = 300
let x3 = 400

let y1 = 250
let y2 = 300
let y3 = 450

//colors
let box1c
let box2c
let box3c

function setup() {
    createCanvas(500, 500);
    noStroke()

    box1c = [random()*255,random()*255,random()*255]
    box2c = [random()*255,random()*255,random()*255]
    box3c = [random()*255,random()*255,random()*255]
}

function draw() {
    ellipse()
    let pmx1 = mouseX * 0.3
    let pmx2 = mouseX * 0.4
    let pmx3 = mouseX * 0.2
    let pmy1 = mouseY * 0.2
    let pmy2 = mouseY * 0.3
    let pmy3 = mouseY * 0.6


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
    rect(x1,y1,50,50)

    fill(box2c[0],box2c[1],box2c[2])
    rect(x2,y2,50,50)

    fill(box3c[0],box3c[1],box3c[2])
    rect(x3,y3,50,50)
}