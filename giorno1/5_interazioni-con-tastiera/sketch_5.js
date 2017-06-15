var positionX = 50;
var positionY = 50;

var speedX=1;
var speedY=0;

var speedFactor=1;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(153);
  updatePosition();
  disegnaCorpo(positionX, positionY);
  disegnaOcchi();
  disegnaCappello();
  if (mouseIsPressed) {
    disegnaBocca(true);
  } else {
    disegnaBocca(false);
  }
}

function updatePosition(){
  positionX = positionX+speedX*speedFactor;
  positionY = positionY+speedY*speedFactor;
}

function disegnaCorpo(x, y) {
  strokeWeight(4);
  fill(200, 200, 0);
  rect(x - 50, y - 50, 100, 100);
}

function disegnaCappello() {
  push();
  stroke(0);
  translate(positionX - 60, positionY - 60);
  fill(255, 100, 30);
  triangle(0, 0, 0, 60, 60, 0);
  pop();
}

function disegnaOcchi() {
  fill(255);
  ellipse(positionX - 50 + 25, positionY - 50 + 30, 20, 20)
  ellipse(positionX - 50 + 70, positionY - 50 + 30, 30, 30)
}

function disegnaBocca(chiusa) {
  if (chiusa) {
    stroke(0);
    line(positionX - 30, positionY + 30, positionX + 30, positionY + 30)
  } else {
    noStroke();
    fill(255, 0, 0);
    rect(positionX - 30, positionY + 13, 60, 20);
  }

  fill(255);
  noStroke();
  rect(positionX - 30, positionY + 18, 10, 10);
  rect(positionX + 20, positionY + 18, 10, 10);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     speedX=-1;
     speedY=0;
  }else if(keyCode === RIGHT_ARROW){
     speedX=1;
     speedY=0;
  }else if(keyCode === UP_ARROW){
     speedX=0;
     speedY=-1;
  }else if(keyCode === DOWN_ARROW){
     speedX=0;
     speedY=1;
  }

}
