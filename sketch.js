var fixedrec, movingrec;
var obt;

function setup(){

  createCanvas(600,600)

  obt=createSprite(300,300,50,50);
  obt.shapeColor="blue"

  fixedrec=createSprite(100,350,50,40);
  fixedrec.shapeColor="purple"

  movingrec=createSprite(100,450,40,50);
  movingrec.shapeColor="black"

  movingrec.velocityX=2
  movingrec.velocityY=2
}

function draw(){

  background("lightblue")

  obt.x=World.mouseX;
  obt.y=World.mouseY;

  if(myTouching(fixedrec,obt)){
    fixedrec.shapeColor="black"
  }
  else{
    fixedrec.shapeColor="purple"
  }

  myBounceOff(movingrec,obt);
  myCollision(movingrec,obt);

   drawSprites();
}
