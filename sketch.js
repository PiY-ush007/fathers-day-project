 
 
 var player;
 var enemy,enemyimg;
 var bullet;
 var bulletGroup,npcGroup,npc2Group,npc3Group;
 var count=0;
 var enemy2,enemy2img;
 var GameOver;
 var ground;
 var divider;
 

function preload(){
  enemy2img=loadImage("fdtxt1.png");
  enemyimg=loadImage("fdtxt2.png");
 


}



function setup() {
  createCanvas(600, 400);

 player=new Player(200,380,10,10);
 bulletGroup= new Group();
 divider=createSprite(410,200,10,400);
 
 ground=createSprite(200,410,400,20);
 npcGroup=new Group();
 npc2Group=new Group();

}
 

function draw() {
  background("black");
  player.display();
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10;
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-10;
  }
  
if(player.x<10){
  player.x=10;
}
if(player.x>390){
  player.x=390;
}
if(frameCount%60===0){
  enemy=createSprite(random(20,380),0,30,30);
  enemy.velocityY=7;
  npcGroup.add(enemy);
  enemy.addImage("enemy",enemyimg);
  enemy.scale=0.5;
 
}
if(frameCount%80===0){
  enemy2=createSprite(random(20,380),0,30,30);
  enemy2.velocityY=5;
  npc2Group.add(enemy2);
  enemy2.addImage("enemy2",enemy2img);
  enemy2.scale=0.5;
}

if(keyWentDown("SPACE")){
  bullet=createSprite(player.x,player.y,5,20);
  bullet.velocityY=-10;
  bullet.shapeColor=("yellow")
  bulletGroup.add(bullet);
}
text("Help your dad to solve ",450,100);
text("his daily problems",450,120);


text("score:"+count,450,50);
if(bulletGroup.isTouching(enemy)){
  enemy.destroy();
  bullet.destroy();
  count=count+1;
}
if(bulletGroup.isTouching(enemy2)){
  enemy2.destroy();
  bullet.destroy();
  count=count+1;
}

text("press space to shoot",450,200);

divider.shapeColor=("blue")








  drawSprites();
  if(npcGroup.isTouching(ground)||npc2Group.isTouching(ground)){
 
    textSize(20);
    text("GAME OVER ",150,150);
    text("Dont worry you can still",100,200);
    text("help your dad, but in the real life.",80,240);
    enemy.destroyEach();
    enemy2.destroyEach();
    
    
 
   
  }
}