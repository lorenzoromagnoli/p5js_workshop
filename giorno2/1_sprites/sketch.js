var piccione;

var piccioneWalk;
var piccioneEat;

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
}

function setup() {
  createCanvas(800, 600);
  piccione = createSprite(10,10,100,100);
  piccione.scale = .5
  piccione.addAnimation("walk", piccioneWalk);
  piccione.addAnimation("eat", piccioneEat);
  //walk.frameDelay=9;
}

function draw() {
  background(153);
  drawSprites();
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    piccione.velocity.x=0;
    piccione.changeAnimation("eat");
    piccione.animation.rewind();
    piccione.animation.play();

  }else if(keyCode==RIGHT_ARROW){
    piccione.changeAnimation("walk");
    piccione.mirrorX ( -1 );

  }else if(keyCode==LEFT_ARROW){
    piccione.changeAnimation("walk");
    piccione.mirrorX ( 1 );
    piccione.position.x-=10;
  }

}
