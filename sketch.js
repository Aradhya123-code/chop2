//Game States
var PLAY=1;
var END=0;
var gameState=1;
var mangoImg , appleImg , papayaImg , watermelonImg , mombImg ;
var momb1, fruit1 , fruit2, fruit3 , fruit4;
var knife, knifeImage ;
var fruit1G , fruit2G , fruit3G, fruit4G ,momb1G;
var gameOverImg;

function preload(){
  
  knifeImage = loadImage("knife.png");
  appleImg = loadImage("apple.png");
  mangoImg = loadImage("mango.jpg");
  papayaImg = loadImage("papaya.jpg");
  watermelonImg = loadImage("watermelon.jpg");
  mombImg = loadImage("momb.jpg");
  gameOverImg = loadImage("gameOver.jpg");
}

function setup() {
  createCanvas(500, 450);
  
  gameOver=createSprite(300,100,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.5;
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruit1G = new Group();
  fruit2G = new Group();
  fruit3G = new Group();
  fruit4G = new Group();
  momb1G = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    gameOver.visible= false;
    //calling fruit and monster function
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   if(fruit1G.isTouching(knife)){
   fruit1G.destroyEach();
     score = score+1;
  }
     if(fruit2G.isTouching(knife)){
   fruit2G.destroyEach();
     score = score+1;
  }
    
     if(fruit3G.isTouching(knife)){
     fruit3G.destroyEach();
     score = score+1;
  }
    
     if(fruit4G.isTouching(knife)){
     fruit4G.destroyEach();
     score = score+1;
     }
    
     if(momb1G.isTouching(knife)){
     momb1G.destroyEach();
     gameState = END;
     }
    // Go to end state if knife touching enemy
    //if(knife.isTouching(momb))
      //gameState = END;
var select_sprite = Math.round(random(1,4));
  console.log(select_sprite)
  
  if (World.frameCount % 80 == 0) {
    if (select_sprite == 1) {
      mango();
    } else if (select_sprite == 2) {
      apple();
    } else if (select_sprite == 3) {
      papaya();
    } else if (select_sprite == 4) {
      momb();
    } else {
      watermelon();
    }
  }
  }
  if(gameState===END){
   gameOver.visible=true;
    fruit1G.velocityX = 0;
    fruit2G.velocityX = 0;
    fruit3G.velocityX = 0;
    fruit4G.velocityX = 0;
    momb1G.velocityX = 0;
  }
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function mango() {
  fruit1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  fruit1.addImage(mangoImg);
  fruit1.velocityX = 10;
  fruit1.scale = 0.1
  fruit1.lifetime = 300;
  fruit1G.add(fruit1);
}

function apple() {
  fruit2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  fruit2.addImage(appleImg);
  fruit2.velocityX = 10;
  fruit2.scale = 0.2
  fruit2.lifetime = 300;
  fruit2G.add(fruit2);
}
  
  
function papaya() {
  fruit3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  fruit3.addImage(papayaImg);
  fruit3.velocityX = 10;
  fruit3.scale = 0.1
  fruit3.lifetime = 300;
  fruit3G.add(fruit3);
}
  
function watermelon() {
  fruit4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  fruit4.addImage(watermelonImg);
  fruit4.velocityX = 10;
  fruit4.scale = 0.05
  fruit4.lifetime = 300;
  fruit4G.add(fruit4);
 }

function momb() {
  momb1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  momb1.addImage(watermelonImg);
  momb1.velocityX = 10;
  momb1.scale = 0.05;
  momb1.lifetime = 300;
  momb1G.add(momb1);
 }