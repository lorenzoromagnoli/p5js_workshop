//Moving sprites
var piccione;

var walkR, eat;

function preload() {
walk = loadAnimation("assets/piccione/walkR.000.png",  "assets/piccione/walkR.001.png",  "assets/piccione/walkR.002.png",  "assets/piccione/walkR.003.png", "assets/piccione/walkR.004.png");
walk.frameDelay=9;

eat = loadAnimation("assets/piccione/eatR.000.png",  "assets/piccione/eatR.001.png",  "assets/piccione/eatR.002.png",  "assets/piccione/eatR.003.png", "assets/piccione/eatR.004.png","assets/piccione/eatR.005.png");

eat.looping=false;
}


function setup() {
  createCanvas(1000,600);

  //create the sprites
  piccione = createSprite(100, 300, 100, 100);
  piccione.scale=.5;
  piccione.addAnimation("normal", "assets/piccione/lean.000.png",  "assets/piccione/standing2.png");
  piccione.addAnimation("walk", walk);
  piccione.addAnimation("eat", eat);


}

function draw() {
  background(206,255,150);

  if(keyDown("c") || mouseDown(RIGHT)){
    moveRight();
  }else if (keyDown("z") || mouseDown(RIGHT)){
    moveLeft();
  }else if (keyDown("x") || mouseDown(RIGHT)){
    mangia();
  }else{
  }
  //draw the sprite
  drawSprites();
}

function mangia(){
  piccione.changeAnimation("eat");
  piccione.animation.rewind();
  piccione.animation.play();
  piccione.setSpeed(0, 180);
}

function moveRight(){
  piccione.mirrorX ( 1 );
  piccione.changeAnimation("walk");
  piccione.setSpeed(2, 0);
}

function moveLeft(){
  piccione.mirrorX ( -1 );
  piccione.changeAnimation("walk");
  piccione.setSpeed(2, 180);
}

function stay(){
  piccione.changeAnimation("normal");
  piccione.setSpeed(0, 180);
}

function muoviPiccione(val){
  if (val==0){
    stay();
  }else if(val==1){
    moveRight();
  }else if(val==-1){
    moveLeft();
  }
}
