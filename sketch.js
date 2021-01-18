const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;

function preload(){
	polygonimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.

stand2=new Stand(700,337,250,20);

//level1
fill("turquoise")
box17=new Box(700,300,40,50)
box18=new Box(740,300,40,50)
box19=new Box(660,300,40,50)
box20=new Box(620,300,40,50)
box21=new Box(770,300,40,50)
//level 2
fill("skyblue")
box22=new Box(730,250,40,50)
box23=new Box(690,250,40,50)
box24=new Box(650,250,40,50)
//top
fill("pink")
box25=new Box(690,200,40,50)

ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
 // stand1.display();
  stand2.display();
  //box1.display();
 
  box17.display();
  box18.display();
 box19.display();
  box20.display();
 box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
slingshot.display();
ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}