const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cursor1;//
var GridHeight=300;
var GridWidth=50;

function setup() {
	canvas=createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	//cursor1=createSprite(mouseX,mouseY,20,20);
	for (var k = 0; k <=width; k = k + 80) {
		grids.push(new Grids(k, height-GridHeight/2, 10, GridHeight));
	  }
	  for (var l = 0; l <=height; l = l + 80) {
		grids.push(new Grids(k, width-GridWidth/2, 10, GridWidth));
	  }
}


function draw() {
  background("white");
  Engine.run(engine);

  //cursor1.display();

  for (var k = 0; k < grids.length; k++) {
     
	grids[k].display();
  }
  for (var l = 0; l < grids.length; l++) {
     
	grids[l].display();
  }

}