var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,150,50,100);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(250,150,50,100);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(400,150,50,100);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(550,150,50,100);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject3)){
    gameObject3.width=300;
    movingRect.height = 70;
    gameObject3.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }

  else{
    gameObject3.width = 50;
    movingRect.height = 30;
    gameObject3.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}

