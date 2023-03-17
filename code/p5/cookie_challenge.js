//canvas
let canvasxratio = 27
let canvasyratio = 40
let cx = canvasxratio*10
let cy = canvasyratio*10

//portal
plx = cx/1.2
ply = plx
plstroke = 20

//text
textfont = 'Helvetica'

titlesize = 40
creditsize = 15


function setup() {
    let cochcnv = createCanvas(cx,cy)

    //HTML Setup
    cochcnv.parent('CoCh')
}
  
function draw() {
    background(16,18,41)
  
    //portal
    noFill()
    stroke(255, 192, 56)
    strokeWeight(plstroke)
    ellipse(cx/2,cy-190,plx,ply)
  
    //human
    fill(255,0,0)
    noStroke()
    rect(cx/2-25,cy/3, 50, cy)
  
    //earth
    fill(43,89,227)
    noStroke()
    ellipse(cx/2, cy+cx/6.3, 300, 300)
  
    //text - title
    fill(255,255,255)
    textFont(textfont)
    textStyle(BOLD)
    textSize(titlesize)
    textAlign(CENTER)
    let title = text('The Cracked\nCookie Code',cx/2,cy/2.5)

    //text - credits
     fill(255,255,255)
    textFont(textfont)
    textStyle(BOLD)
    textSize(creditsize)
    textAlign(CENTER)
    let subtitle = text('By Kingston Tsai',cx/2,cy-10)
}