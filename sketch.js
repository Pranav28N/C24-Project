
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new paper(150,400,20) 
	groundObject = new Ground(500,670,1000,20)
	dustbinside1 = new Dustbin(850,650,150,10)
	dustbinside2 = new Dustbin(775,620,10,70)
	dustbinside3 = new Dustbin(925,620,10,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display()
  paperObject.display()
  dustbinside1.display()
  dustbinside2.display()
  dustbinside3.display()
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-20})
	}

}





