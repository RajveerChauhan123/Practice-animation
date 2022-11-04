var ghost
var ghostanimation




function preload() {
ghostanimation = loadAnimation("ghost1.png","ghost2.png","ghost3.png")


}

function setup(){
createCanvas(500,500)
ghost = createSprite(250,250,10,10)
ghost.addAnimation("Running_ghost",ghostanimation)
}

function draw(){
background("black")
  drawSprites()
}