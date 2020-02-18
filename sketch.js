//computer paddles and player paddle
var com
var pla
var com2
var pla2

// ball
var ball

//wall in the game
var group
var wall16
var wall15
var wall14
var wall13
var wall12
var wall11
var wall10
var wall9
var wall8
var wall7
var wall6
var wall5
var wall4
var wall3
var wall2
var wall1
var wall17

//variable to store different state of game
var gameState = "serve";
var comscc=0;
var newpscc=0;

//count 
var countc
var countb
var counta
var countd


function setup(){
  

//computer paddles and player paddle
 com=createSprite(200,15,50,3);
 pla=createSprite(200,385,50,3);
 com2=createSprite(385,200,3,50);
 pla2=createSprite(15,200,3,50);

// ball
 ball=createSprite(200,200,10,10);

//wall in the game
 group=createGroup();
 wall16=createSprite(50,215,10,200);
 wall15=createSprite(225,50,150,10);
 wall14=createSprite(350,200,10,150);
 wall13=createSprite(175,350,150,10);
 wall12=createSprite(300,325,10,50);
 wall11=createSprite(275,250,150,10);
 wall10=createSprite(325,100,50,10);
 wall9=createSprite(275,150,50,10);
 wall8=createSprite(250,150,10,100);
 wall7=createSprite(200,200,100,10);
 wall6=createSprite(150,275,10,150);
 wall5=createSprite(200,275,10,50);
 wall4=createSprite(225,300,50,10);
 wall3=createSprite(200,100,10,25);
 wall2=createSprite(150,150,100,10);
 wall1=createSprite(100,100,100,10);
 wall17=createSprite(100,225,10,100);
group.add(wall17);
group.add(wall1);
group.add(wall2);
group.add(wall3);
group.add(wall4);
group.add(wall5);
group.add(wall6);
group.add(wall7);
group.add(wall8);
group.add(wall9);
group.add(wall10);
group.add(wall11);
group.add(wall12);
group.add(wall13);
group.add(wall14);
group.add(wall15);
group.add(wall16);


//count 
 countc=0  ;
 countb=0 ;
 counta=0 ;
 countd=0  ;

}



function draw() {
  
    
  //make the player paddle move with the mouse's y position
  pla2.y = World.mouseY;
  pla.x=World.mouseX;
  
    //clear the screen
  background("black");
  
    // text for the game 
      textFont("Old English Text MT");
     textSize(15);
     fill("pink");

   
  
  //color of the solids 
  com.shapeColor="green"  ;
  com2.shapeColor="green"  ;
  pla.shapeColor="red"  ;
  pla2.shapeColor="red" ;
  ball.shapeColor="orange" ;
 group.setColorEach("blue");
  
   //sound setting
   
  
  if (keyDown("RIGHT_ARROW")){
    com.setVelocity(0,-2);
  }
  
  
  //place info text in the center
  if (gameState === "serve"  ) {
    textFont("Old English Text MT");
     textSize(25);
     fill("yellow");
    text("Press Space to Serve",100,180);
  
  
  }
  fill("red");
  
   text(comscc,175,100);
   fill("green");
   text(newpscc,225,100);

 //AI for the solids
  ball.bounceOff(pla);
  ball.bounceOff(pla2);
  ball.bounceOff(com);
  ball.bounceOff(com2);
 ball.bounceOff(group);
 
  //make it move with the ball's y position and x positiion
  com.x = ball.x;
  com2.y=ball.y;
 
  
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  
  //serve the ball when space is pressed
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
   
   
  }
  
    // comscc and newpscc
  if (ball.x<0||ball.y<0){
    newpscc=newpscc+1;
  }  
    if (ball.x>400){
      comscc=comscc+1; 
    }
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    reset();
    gameState="serve" ;
  }

    
  //game over fuction
  if (comscc===5||newpscc===5){
    gameState="over";
    text("game over",170,160);
    text ("press r to restart ",150,180);
  }
  if (keyDown("r")&& gameState==="over"){
    gameState="serve";
    comscc=0;
    newpscc=0;
  }


  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}    