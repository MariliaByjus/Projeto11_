var sea;
var ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
sea=createSprite(50,50);
sea.addImage(seaImg);
sea.scale=0.5;
sea.velocityX=-3;
ship=createSprite(100,100);
ship.addAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
ship.scale=0.2;
}

function draw() {
  background("blue");
    drawSprites();
    if(sea.x < 0){
      sea.addImage("sea.png",seaImg);
     sea.x = sea.width/2; 
  }
}

