var hunter,hunterImage
var zombie,zombieImage
var background,backgroundImage
var bullet,bulletImage

function preload(){
  hunterImage=loadImage("hunter.png")
  zombieImage=loadImage("zombie.png")
  backgroundImage=loadImage("background.png")
  bulletImage=loadImage("bullet.png")

}

function setup(){
  createCanvas(1198,672)
  background=createSprite(1198/2,672/2,1198,672)
  background.addImage(backgroundImage)

  hunter=createSprite(100,510,20,20)
  hunter.addImage(hunterImage)
  hunter.scale=0.5
}

function draw() {

if(keyDown(RIGHT_ARROW)){
hunter.x=hunter.x+5
}

if(keyDown(LEFT_ARROW)){
  hunter.x=hunter.x-5
  }

  if(keyDown(UP_ARROW)){
    hunter.y=hunter.y-5
    }

    if(keyDown(DOWN_ARROW)){
      hunter.y=hunter.y+5
      }
spawnZombie();
 
  drawSprites();
}

function spawnZombie(){
  if(frameCount % 60===0){
    zombie=createSprite(700,90)   
  zombie.y=Math.round(random(100,200))
  zombie.addImage(zombieImage)
  zombie.scale=0.3
  zombie.velocityX=-20
zombie.lifetime=300
  }

}