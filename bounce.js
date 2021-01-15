var rect1, rect2;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200, 800);
  rect1 = createSprite(700, 400, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect1.velocityX = -2;

  rect2 = createSprite(100, 400, 80, 30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect2.velocityY = -2;

  gameObject1 = createSprite(100, 150, 50, 100);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityY = 2;

  gameObject2 = createSprite(250, 150, 50, 100);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(400, 150, 50, 100);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(550, 150, 50, 100);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(0, 0, 0);
  //rect2.x = World.mouseX;
  //rect2.y = World.mouseY;

  bounce(rect2, gameObject1);



  drawSprites();
}

