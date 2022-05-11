var path,boy,invisibleLeft,invisibleRight;
var pathImg,boyImg,coinImg;
var coin,totalCoins;
var number;
var velocity;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  number = Math.round(random(1,3));
  totalCoins = 0;
  velocity = 4;
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = velocity;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale = 0.08;
boy.addAnimation("JakeRunning",boyImg);
  

invisibleLeft = createSprite(-10,0,100,800);
invisibleLeft.visible = false;


invisibleRight = createSprite(410,0,100,800);
invisibleRight.visible = false;

coin = createSprite((width/4)*number,-40,40,40);
coin.addImage(coinImg);
coin.scale = 0.4;

}

function newCoin(){
  number = Math.round(random(1,3));
  coin = createSprite((width/4)*number,-40,40,40);
  coin.addImage(coinImg);
  coin.scale = 0.4;
}

function draw() {
  background(0);
  path.velocityY = velocity;
  coin.velocityY = velocity;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(invisibleLeft);
  boy.collide(invisibleRight);
  
  //code to reset the background
  if(path.y > 400 ){
  path.y = height/2;}

  //Coin 
  if(boy.collide(coin)){
    coin.destroy(); 
    totalCoins++;
    newCoin();
    velocity += 0.5;
  }
  if(coin.y > 400){
    newCoin();
  }
  
  drawSprites();

  fill("white");
  textSize(20);
  text("Coins: " + totalCoins,50,10,400,400);
}
