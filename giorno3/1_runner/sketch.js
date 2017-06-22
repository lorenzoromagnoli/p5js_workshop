var piccione;

var piccioneWalk;
var piccioneEat;

var bgImg;
var obstacle;
var groundImg;

var groundHeight = 70;


function preload() {
  piccioneWalk = loadAnimation("assets/walkL.000.png",
    "assets/walkL.001.png",
    "assets/walkL.002.png",
    "assets/walkL.003.png",
    "assets/walkL.004.png"
  );
  piccioneWalk.frameDelay = 9;

  piccioneEat = loadAnimation(
    "assets/eatL.000.png",
    "assets/eatL.001.png",
    "assets/eatL.002.png",
    "assets/eatL.003.png"
  )
  piccioneEat.looping = false;

  bgImg = loadImage("assets/background.png");
  groundImg = loadImage("assets/ground.png");

}

function setup() {
  createCanvas(800, 600);
  piccione = createSprite(100, height - 90, 100, 100);
  piccione.scale = .5
  piccione.addAnimation("walk", piccioneWalk);
  piccione.addAnimation("eat", piccioneEat);
  //walk.frameDelay=9;
  piccione.debug = true;

  ground = createSprite(0, height - groundHeight);
  ground.scale = .5
 //image 800x200
  ground.addImage(groundImg);

  camera.position.y = height / 2;
  camera.debug=true;
}

function draw() {

  background(247, 134, 131);
  drawBg();


  camera.position.x = piccione.position.x;
  controls();


  drawSprite(ground);
  drawSprite(piccione);

  updateGround();
}

function controls() {
  if (keyIsDown(LEFT_ARROW)) {
    //moveR();
  } else if (keyIsDown(RIGHT_ARROW)) {
    moveR();
  }
}

function updateGround(){
  if(camera.position.x > ground.position.x+ground.width/4){
      ground.position.x+=ground.width/2;
  }
}

function drawBg(){
  camera.off();
  image(bgImg, 0, 0, width, height - groundHeight);
  camera.on();
}

function moveR() {
  piccione.changeAnimation("walk");
  piccione.mirrorX(-1);
  piccione.position.x += 50;

}

function moveL() {
  piccione.changeAnimation("walk");
  piccione.mirrorX(1);
  piccione.position.x -= 50;
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    piccione.velocity.x = 0;
    piccione.changeAnimation("eat");
    piccione.animation.rewind();
    piccione.animation.play();
  }
}
