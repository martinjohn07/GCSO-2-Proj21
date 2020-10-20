var wall,thickness;
var speed,weight,bullet,damage

function setup() {
  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(750,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(200,200,30,30)
  bullet.shapeColor = "white"
  bullet.velocityX = speed

}

function draw() {
  background("black");  
  
  if (hasCollided(bullet,wall)) {

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10) {
         wall.shapeColor=color(255,0,0);
    }

    if (damage<10) {
          wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge) {
      return true
  }
  return false
}