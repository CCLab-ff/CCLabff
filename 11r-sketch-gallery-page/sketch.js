
let z = 0;
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("canvasContainer");

  
}

function draw() {
  background(8, 19, 77);
  drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
  fill(240, 220, 137 )
  circle(640 - z, 150, 180);
  fill(8, 13, 43 )
  rect(0,350,800,500)
  fill(240, 220, 137  )
  triangle(570 - z,350,670 - z,350,350,600)
  fill(157, 168, 193 );
  rect(387,450,20,70)
  rect(360,450,20,70);
  fill(63, 49, 4 )
  triangle(0, 450, 0, 500, 750, 450);
  ellipse(60, 490, 77, 20);
  ellipse(90, 450, 77, 20);
  ellipse(250, 450, 55, 10);
  ellipse(150, 490, 55, 10);
  ellipse(350, 470, 77, 20);
  ellipse(420, 450, 77, 20);
  ellipse(550, 450, 55, 10);
  fill(157, 168, 193 )
  rect(350, 350, 70, 90);
  triangle(370,290,370,320,350,270)
  triangle(400,290,400,320,430,270)
  ellipse(385, 440, 90, 70);
  ellipse(385, 310, 50, 60);
  quad(420,420,350,521,380,500,410,450);
 

  push();
  beginShape();
  let angle = sin(frameCount * 0.07);
  noStroke();
  //fill(150, 200);
  push();
  translate(x, y);
  rotate(angle * 0.1);
  ellipse(70, 50, 200, 30);
  ellipse(-70, 50, 200, 30);
  pop();
  push();
  translate(x, y);
  rotate(-angle * 0.3);
  ellipse(70, 50, 200, 40);
  ellipse(-70, 50, 200, 40);
  endShape();

  pop();
  z = z + 1
  if (z == 800) {
    z = 0
  }
  
}

