var ninjaimg
var backgroundimg
function preload(){
  ninjaimg=loadImage("images/ninja.jpg")
  backgroundimg=loadImage("images/background.jpg")
  box=loadImage("images/box2.png")
  alien=loadImage("images/alien.png")
  bullet=loadImage("images/bullet.png")
  crystal=loadImage("images/crystal.jpg")
}
function setup(){
  Canvas=createCanvas(1000,400);
  bg=createSprite(300,300,600,600);
  bg.scale=6;
  bg.addImage(backgroundimg);
  bg.velocityX=-4;
  ninja=createSprite(300,300,20,20);
  ninja.addImage(ninjaimg);
  ground=createSprite(300,400,50,10);
 }
function draw(){
  background("black");
  if (bg.x<0){
    bg.x=bg.width/2
  }
if(keyWentDown("space")){
  ninja.velocityY=-20;
}
if(keyWentDown(UP_ARROW)){
  bullets=createSprite(300,300,10,10);
  bullets.addImage(bullet)
  bullets.velocityX=4;
  bullets.lifetime=140;
  bullets.scale=0.5;
}
ninja.velocityY=ninja.velocityY+1;
ninja.collide(ground)
 spawnBox() 
  drawSprites()

}

function spawnBox(){
  if(frameCount%60===0){
  box2=createSprite(1000 ,500,40,40);
  box2.addImage(box)
  box2.velocityX=-4;
  box2.lifetime=100;
  }
  function spawnCrystal(){
    if(frameCount%60===0){
    crystal=createSprite(1000 ,400,40,40);
    crystal.addImage(cryatal)
    crystal.velocityX=-4;
    crystal.lifetime=100;
    }
  
}
function spawnAliens(){
  if(frameCount%60===0){
  aliens=createSprite(1000 ,200,40,40);
  aliens.addImage(cryatal)
  aliens.velocityX=-4;
  aliens.lifetime=100;
  }

}
}