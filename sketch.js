var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 675, width, 50 , {isStatic:true} );
	 World.add(world, ground);
	 
	 helicopter = Bodies.rectangle(width/2,50,100,80,{isStatic:true})
	 World.add(world,helicopter)

	 var options = {
	
		isStatic:true,
		restitution:1

	}

	
	packageBody = Bodies.circle(width/2 , 50 ,50,options );
	World.add(world, packageBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  
  fill("green")
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,width,50)

 fill("brown")
 imageMode(RADIUS)
	image(packageIMG,packageBody.position.x,packageBody.position.y,50,50)

 
 imageMode(CENTER)
 image(helicopterIMG,helicopter.position.x,helicopter.position.y,200,100)

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false)
	//ellipseMode(RADIUS)
	//ellipse(packageBody.position.x,packageBody.position.y,20,20)

    
  }
}



