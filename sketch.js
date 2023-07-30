var roadImg,road;
var orangeCarImg,orangeCar,orangeCarGroup;
var cyanCarImg,cyanCar,cyanCarGroup
var playerCarImg,playerCar;
var gamestate="play";

function preload(){
roadImg=loadImage("road.png.png");
cyanCarImg=loadImage("cyan car.png");
orangeCarImg=loadImage("orange car.png")
playerCarImg=loadImage("pc.png");
coolMusic=loadSound("bg.mp3");

}

function setup() {
 createCanvas(600,600);

 road=createSprite(300,300);
 road.addImage("road",roadImg);
 road.velocityY=5;

 playerCar=createSprite(400,400);
 playerCar.addImage("PC",playerCarImg);
 playerCar.scale=0.3;

 cyanCarGroup=createGroup();
 orangeCarGroup=createGroup();

}

function draw() {
 background(200);
   if (gamestate==="play"){
 if(road.y > 400){
        road.y = 300;
      }
      if(keyDown("A")){
        playerCar.velocityX=playerCar.velocityX-2;
    }
      if(keyDown("D")){
        playerCar.velocityX=playerCar.velocityX+2;        
      }

    if(playerCar.isTouching(cyanCarGroup)){
      gamestate="end";

    }
    if(playerCar.isTouching(orangeCarGroup)){
      gamestate==="end";
    }
    spawnCyanCar();
    spawnOrangeCar()
      
    drawSprites();
  }
    }
    if(gamestate="end"){
      
      playerCar.velocityY=0;
      fill("cyan")
      text("You Lost",300,300)
    }

      spawnCyanCar();
      spawnOrangeCar()
        
      drawSprites();
  


function spawnCyanCar(){
    if(frameCount%150===0){
        var rand=Math.round(random(200,400));
        cyanCar=createSprite(rand,-10,0,50);
        cyanCar.addImage("cyan",cyanCarImg);
        cyanCar.velocityY=3;
        cyanCar.lifetime=600;
        cyanCar.scale=0.3;
        cyanCarGroup.add(cyanCar);
    }
}

function spawnOrangeCar(){
  if(frameCount%200===0){
    var rand=Math.round(random(200,400));
    orangeCar=createSprite(rand,-10,0,50);
    orangeCar.addImage("orange",orangeCarImg);
    orangeCar.velocityY=3;
    orangeCar.lifetime=600;
    orangeCar.scale=0.05;
    orangeCarGroup.add(orangeCar);
  }
}