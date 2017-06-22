var piccione, ground, obstacle;

var piccioneWalk;
var piccioneEat;


var bgImg;

var obstacles, ground;
var obstacleImg, groundImg;
var groundHeight = 40;

var gravity=9.8;

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

  obstacleImg = loadImage("assets/obstacle.png");

}

function setup() {
  createCanvas(800, 600);
  piccione = createSprite(100, height - 90, 100, 100);
  piccione.scale = .4
  piccione.addAnimation("walk", piccioneWalk);
  piccione.addAnimation("eat", piccioneEat);
  //walk.frameDelay=9;
  piccione.debug = true;

  ground = createSprite(0, height - groundHeight);
  ground.scale = .5
  //image 800x200
  ground.addImage(groundImg);

  obstacles = new Group();
  obstacles.debug=true;

  camera.position.y = height / 2;
  camera.debug = true;
}

function draw() {

  background(247, 134, 131);
  drawBg();

  updateObstacles();

  camera.position.x = piccione.position.x;
  controls();


  drawSprite(ground);
  drawSprite(piccione);
  drawSprites(obstacles);

  updateGround();
  calcGravity();
}


function updateObstacles() {
  //spawn pipes

  if (frameCount % 60 == 0) {
    console.log("adding pipes");
    var sasso = createSprite(piccione.position.x + width, height-100);
    sasso.scale=random(0,1)
    sasso.addImage(obstacleImg);
    obstacles.add(sasso);
  }

  //get rid of passed pipes
  for (var i = 0; i < obstacles.length; i++){
    if (obstacles[i].position.x < piccione.position.x - width / 2){
      obstacles[i].remove();
    }
  }
}



function controls() {
  if (keyIsDown(LEFT_ARROW)) {
    //moveR();
  } else if (keyIsDown(RIGHT_ARROW)) {
    moveR();
  }
}

function updateGround() {
  if (camera.position.x > ground.position.x + ground.width / 4) {
    ground.position.x += ground.width / 2;
  }
}

function drawBg() {
  camera.off();
  image(bgImg, 0, 0, width, height - groundHeight);
  camera.on();
}

function moveR() {
  piccione.changeAnimation("walk");
  piccione.mirrorX(-1);
  piccione.position.x += 20;

}

function moveL() {
  piccione.changeAnimation("walk");
  piccione.mirrorX(1);
  piccione.position.x -= 20;
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    piccione.velocity.y = -60;
  }
}

function calcGravity(){
  if (piccione.position.y<height - 90){
    piccione.velocity.y+=gravity;
  }else{
    piccione.velocity.y=0;
  }

  if (piccione.position.y>height - 70){
    piccione.position.y=height - 90;
  }
}
