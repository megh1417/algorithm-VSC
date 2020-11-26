var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1100, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX= -4;
  fixedRect.debug = false;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX= 4;
  movingRect.debug = false;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,fixedRect);
 
  drawSprites();
}

