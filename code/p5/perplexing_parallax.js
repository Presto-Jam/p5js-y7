//parralax effect variables
let x1 = 250
let x2 = 300
let x3 = 400

let y1 = 250
let y2 = 300
let y3 = 450

function setup() {
    createCanvas(500, 500);
}

function draw() {
    let pmx = mouseX * 0.3
    let pmy = mouseY * 0.2


    //update parallax effects
    addEventListener("mousemove", (event) => {});

    onmousemove = (event) => {
        x1 = -pmx + 500
        x2 = -pmx + 500
        x3 = -pmx + 500
        y1 = 250 - pmy
        y2 = 250 - pmy
        y3 = 250 - pmy
    };

    background(0,0,0);
    fill(255,255,255)
    rect(x1,y1,50,50)

    fill(255,255,255)
    rect(x2,y2,50,50)

    fill(255,255,255)
    rect(x3,y3,50,50)
}