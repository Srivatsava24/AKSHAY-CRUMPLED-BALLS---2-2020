const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var dustbin;

function preload() 
{
	dustbin=loadImage('dustbingreen.png')
}

function setup() {
	canvas = createCanvas(1370,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   paper= new Paper(100,400,35) 
  
   ground=new Ground(300,630,2200,70)
   invisibleWall = new Ground(1380,300,30,700)

	 dustbin1=new Dustbin(width/1.4,height-155,15,180)
	 dustbin2=new Dustbin(width/1.19,height-155,15,180)
   dustbin3=new Dustbin(width/1.286,height-65,170,15)
   
	Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background(176,224,230);
  
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

image(dustbin,960,395,210,200)

fill(220,20,60);
  textSize(40);
  textStyle(BOLD);
  textFont("segoe script");
  text("AKSHAY'S CRUMPLED BALLS - 2 2020",250,80);

  fill(0,0,205);
  textSize(20);
  textStyle(BOLD);
  textFont("segoe script");
  text("PRESS UP-ARROW KEY TO THROW ",50,250);

  fill(0,0,205);
  textSize(20);
  textStyle(BOLD);
  textFont("segoe script");
  text("THE WASTE IN THE TRASHBIN",50,290);

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-120})
}
  }
