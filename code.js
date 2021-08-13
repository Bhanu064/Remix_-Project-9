var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var tom = createSprite(20, 335, 15, 15);
tom.shapeColor = "green";

var wall2 = createSprite(200,270,400,5);

var wall3 = createSprite(180,350,5,150);
wall3.shapeColor=("lightblue");

var ball1 = createSprite(80, 335, 10, 10);
var ball2 = createSprite(120, 335, 10, 10);
var ball3 = createSprite(160, 335, 10, 10);
var ball4 = createSprite(200, 335, 10, 10);
var ball5 = createSprite(240, 335, 10, 10);
var ball6 = createSprite(280, 335, 10, 10);
ball1.shapeColor = "red";
ball2.shapeColor = "red";
ball3.shapeColor = "red";
ball4.shapeColor = "red";
ball5.shapeColor = "red";
ball6.shapeColor = "red";

var objective = createSprite(390,335,20,50);
objective.shapeColor = "yellow";


var score = 0;


var gameState = "play";

playSound("assets/category_music/clear_evidence_loop1.mp3", true);

velocity();

function draw() {
  background("lightblue");
  bounce();
  if(keyDown("left")){
   tom.x = tom.x-3;
   gameState = "play";
  }
  if(keyDown("right")){
    tom.x = tom.x+3;
    gameState = "play";
  }
  if(keyDown("up")){
    tom.y = tom.y-3;
    gameState = "play";
  }
  if(keyDown("down")){
    tom.y = tom.y+3;
    gameState = "play";
  }
  text("DEATHS: "+score, 10, 10);
  

  if(tom.collide(ball1)||tom.collide(ball2)||tom.collide(ball3)||tom.collide(ball4)
     ||tom.collide(ball5)||tom.collide(ball6)){
    reset();
    score = score+1;
  }
  
  if(tom.isTouching(wall3)){
    textSize(18);
    fill("black");
    text("You are half way through, Great Job!",25,200);
  }

  if(tom.collide(objective)){
    gameState = "over";
    textSize(18);
    fill("black");
    text("YOU WIN!",200, 200);
    tom.velocityX = 0.0000001;
    tom.velocityY = 0.0000001;
    score = 0;
    text("press R to restart", 200, 220);
  }
  
  if(keyDown("R")&&gameState === "over"){
    reset();
  }
  drawSprites();
  
}
function reset(){
  tom.x = 20;
  tom.y = 335;
  tom.velocityX = 0;
  tom.velocityY = 0;
}


function velocity(){
  
  
  ball1.velocityY = 12;
  ball2.velocityY = -12;
  ball3.velocityY = 12;
  ball4.velocityY = -12;
  ball5.velocityY = 12;
  ball6.velocityY = -12;
}



function bounce(){
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  tom.bounceOff(edges);
  

  ball1.bounceOff(wall2);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall2);
  ball5.bounceOff(wall2);
  ball6.bounceOff(wall2);
  
  tom.bounceOff(wall2);
}









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
