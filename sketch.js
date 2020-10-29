var wall,bullet,thickness;
var speed,wieght,damage;
var canvas;
function setup() {
  canvas=createCanvas(800,400);
  bullet=createSprite(100, 200, 20, 20);
  bullet.shapeColor="white"
  wall=createSprite(700,200,thickness,height/2);
  wall.shapeColor="white";
  speed=random(223,321);
  bullet.velocityX=speed;
  wieght=random(30,50);
  thickness=random(23,83)
}

function draw() {
  background(0);
  if (mousePressedOver(canvas)){
    bullet.velocityX=speed;
  }
  damage=0.5*wieght*speed*speed/(thickness*thickness*thickness);
 if(wall.x-bullet.x<(bullet .width+wall.width)/2){
   if(damage>=10){
    bullet.velocityX=0
    wall.shapeColor="red"
   }
   if(damage<=10){
    bullet.velocityX=0
    wall.shapeColor="green"
  }
}
  drawSprites();
}
