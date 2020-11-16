
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustBin1=createSprite(600,680,150,20);
	//dustBin1.shapeColor=color("yellow");
	//dustBin2=createSprite(525,630,20,120);
	//dustBin2.shapeColor=color("yellow");
	//dustBin3=createSprite(670,630,20,120);
	//dustBin3.shapeColor=color("yellow");
	
	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(100,600,50);
	
	dustbin1 = new Dustbin(600,638,130,20);
	dustbin2 = new Dustbin(525,605,20,80);
	dustbin3 = new Dustbin(675,605,20,80);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  }



