var piccione;

var piccioneWalk;
var piccioneEat;

var backgroundImg;
var groundImg;

var groundSprite;

var gravity=9.8; // m/s^2

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
  piccioneEat.looping=false;
  backgroundImg=loadImage("assets/background.png");
  groundImg=loadImage("assets/ground.png");
}

function setup() {
  createCanvas(800, 600);
  piccione = createSprite(100,height-90,100,100);
  piccione.scale = .5;
  piccione.addAnimation("walk", piccioneWalk);
  piccione.addAnimation("eat", piccioneEat);
  //walk.frameDelay=9;

  groundSprite=createSprite(0,height-40);
  groundSprite.addImage(groundImg);
  groundSprite.scale=.8;
}

function draw() {
  background(153);

  camera.off();
  image(backgroundImg,0,0,width,height);
  camera.on();
  camera.position.x=piccione.position.x;

  //drawSprites()
  drawSprite(groundSprite);
  drawSprite(piccione);
  //
  if(
    camera.position.x>
    groundSprite.position.x
    +groundSprite.width/4
  ){
    groundSprite.position.x+=groundSprite.width/2;
  }

if (piccione.position.y<height-90){
  piccione.velocity.y += gravity;
} else{
  piccione.velocity.y=0;
}

}
function keyPressed(){
  if (keyCode==UP_ARROW){
    piccione.velocity.y=-50;
    piccione.changeAnimation("eat");
    piccione.animation.rewind();
    piccione.animation.play();

  }else if(keyCode==RIGHT_ARROW){
    piccione.changeAnimation("walk");
    piccione.mirrorX ( -1 );
    piccione.velocity.x=10;

  }else if(keyCode==LEFT_ARROW){
    piccione.changeAnimation("walk");
    piccione.mirrorX ( 1 );
    piccione.velocity.x=-10;
  }

}
