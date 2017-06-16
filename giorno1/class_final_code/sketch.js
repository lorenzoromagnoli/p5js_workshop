var positionX=30;
var positionY=30;

var accX=1;
var accY=0;

var targetX;
var targetY;

var punti=0;

function setup() {
  createCanvas(640, 480);
  updateTargetPosition();
}

function draw() {
  background(153);
  updatePosition();
  checkCollision();
  drawTarget();
  disegnaGino(positionX,positionY);
}

function checkCollision(){
  var distanceX=positionX-targetX;
  var distanceY=positionY-targetY;

  if (abs(distanceX)<50 && abs(distanceY)<50){
    updateTargetPosition();
    punti++;
  }
}

function printPoints(){
  textSize(32);
  text("SCORE: "+punti, 40, 40);
}

function updateTargetPosition(){
  targetX=random(width);
  targetY=random(height);
}

function drawTarget(){
  stroke(255);
  fill(255,0,0);
  strokeWeight(10);
  ellipse(targetX, targetY, 20,20);
}

function updatePosition(){
  positionX+=accX;
  positionY+=accY;
}


function disegnaGino(x,y){
  strokeWeight(4);

  fill(200,200,0);
  rect(x-50, y-50, 100, 100);

  fill (255);
  ellipse(x-50+25, y-50+30, 20, 20)
  ellipse(x-50+70, y-50+30, 30, 30)

  stroke(0);
  line(x-30, y+30, x+30, y+30)

  noStroke();
  rect(x-30, y+18, 10, 10);
  rect(x+20, y+18, 10, 10);

  push();
  stroke(0);
  translate(x-60,y-60);
  fill(255,100,30);
  triangle(0, 0, 0, 60, 60, 0);
  pop();
}

function keyPressed(){
  if (keyCode===LEFT_ARROW){
    accX=-1;
    accY=0;
  }else if(keyCode===RIGHT_ARROW){
    accX=1;
    accY=0;
  }else if(keyCode===UP_ARROW){
    accY=-1
    accX=0;
  }else if(keyCode===DOWN_ARROW){
    accY=1;
    accX=0;
  }
}
