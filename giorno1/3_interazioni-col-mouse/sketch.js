var positionX=0;
var positionY=0;


function setup() {
  createCanvas(400, 300);

}

function draw() {

  background(153);

  positionX=mouseX;
  positionY=mouseY;


  strokeWeight(4);

  fill(200,200,0);
  rect(positionX-50, positionY-50, 100, 100);

  fill (255);
  ellipse(positionX-50+25, positionY-50+30, 20, 20)
  ellipse(positionX-50+70, positionY-50+30, 30, 30)

  stroke(0);
  line(positionX-30, positionY+30, positionX+30, positionY+30)

  noStroke();
  rect(positionX-30, positionY+18, 10, 10);
  rect(positionX+20, positionY+18, 10, 10);

  push();
  stroke(0);
  translate(positionX-60,positionY-60);
  fill(255,100,30);
  triangle(0, 0, 0, 60, 60, 0);
  pop();
}
