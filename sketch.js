var caixa;

function setup() {
  createCanvas(500,500);
  caixa = createSprite(250,250,30,30);
}

function draw() {
  background("gray");

  if(keyDown("UP_ARROW")){
    background("red"); 
  }
  if(keyDown("DOWN_ARROW")){
    background("blue");
  }

  if(keyDown("LEFT_ARROW")){
    background("green");
  }
  if(keyDown("RIGHT_ARROW")){
    background("yellow");
  }
  drawSprites();
}






