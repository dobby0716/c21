function myTouching(object1,object2){

    if((object1.width*0.5+object2.width*0.5>object1.x-object2.x) 
    && (object1.width*0.5+object2.width*0.5>object2.x-object1.x)
    && (object1.height*0.5+object2.height*0.5>object2.y-object1.y)
    && (object1.height*0.5+object2.height*0.5>object1.y-object2.y)){
      return true;
    }
    
    else{
      return false;
    }
  
  }
  
  function myBounceOff(object1,object2){
    
    if((object1.width*0.5+object2.width*0.5>object1.x-object2.x) 
    && (object1.width*0.5+object2.width*0.5>object2.x-object1.x)
    && (object1.height*0.5+object2.height*0.5>object2.y-object1.y)
    && (object1.height*0.5+object2.height*0.5>object1.y-object2.y)){
     
      object1.velocityX=-(object1.velocityX);
      object1.velocityY=-(object1.velocityY);
    }
  }
  
  
  function myCollision(object1,object2){
    
    if((object1.width*0.5+object2.width*0.5>object1.x-object2.x) 
    && (object1.width*0.5+object2.width*0.5>object2.x-object1.x)
    && (object1.height*0.5+object2.height*0.5>object2.y-object1.y)
    && (object1.height*0.5+object2.height*0.5>object1.y-object2.y)){
     
      object1.velocityX=0
      object1.velocityY=0
    }
  }
  