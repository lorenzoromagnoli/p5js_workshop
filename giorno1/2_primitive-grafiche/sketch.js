function setup() {
  createCanvas(400, 300);
  background(153);

  strokeWeight(4);

  fill(200,200,0);
  rect(width/2-50, height/2-50, 100, 100);

  fill (255);
  ellipse(width/2-50+25, height/2-50+30, 20, 20)
  ellipse(width/2-50+70, height/2-50+30, 30, 30)

  stroke(0);
  line(width/2-30, height/2+30, width/2+30, height/2+30)

  noStroke();
  rect(width/2-30, height/2+18, 10, 10);
  rect(width/2+20, height/2+18, 10, 10);

  push();
  stroke(0);
  translate(width/2-60,height/2-60);
  fill(255,100,30);
  triangle(0, 0, 0, 60, 60, 0);
  pop();
}

function draw() {
}
