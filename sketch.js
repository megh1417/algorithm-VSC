var fixedbox, movingbox;



function setup() {
  createCanvas(1000,1200);
  fixedbox=createSprite(400, 200, 50, 50);
  movingbox=createSprite(600,300,50,50);
  fixedbox.shapeColor= "yellow";
  movingbox.shapeColor="yellow";
  

}

function draw() {
  background(0);  
  movingbox.x=mouseX;
  movingbox.y=mouseY;

  if(movingbox.x-fixedbox.x < movingbox.width/2+fixedbox.width/2 && 
    fixedbox.x-movingbox.x < fixedbox.width/2+movingbox.width/2 &&
    movingbox.y-fixedbox.y < movingbox.height/2+fixedbox.height/2 &&
    fixedbox.y-movingbox.y < fixedbox.height/2+fixedbox.height/2 ){
    fixedbox.shapeColor= "red";
    movingbox.shapeColor="red";
    
  }
  else
  {  fixedbox.shapeColor= "yellow";
  movingbox.shapeColor="yellow";
  }
  drawSprites();




}