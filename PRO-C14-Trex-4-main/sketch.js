var runner, runner_running;
var path, pathImage;
var meioFio, meioFio2;

function preload(){
  
  runner_running = loadAnimation("R1.png","R2.png");

  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  runner = createSprite(200,200,10,10);
  runner.addAnimation("corredor", runner_running);
  runner.scale = 0.05;

  path = createSprite(200,200,10,10);
  path.addImage("caminho", pathImage);
  
  path.velocityY = 4;
  path.scale = 1.4;  
}



function draw(){
  background(0);
  runner.x = World.mouseX;
  edges= createEdgeSprites();
  runner.collide(edges);
 
  
  if(path.y > 400){
    path.y = height/2;

  }
  path.depth = runner.depth;
  runner.depth ++;
  drawSprites();
}

