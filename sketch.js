const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var ball,rope

function setup(){
    var canvas = createCanvas(7000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    box1=new Box(340,235,30,40);
    box2=new Box(360,235,30,40);
    box3=new Box(390,235,30,40);
    box4=new Box(420,235,30,40);
    box5=new Box(450,235,30,40);
    box6=new Box(350,195,30,40);
    box7=new Box(390,195,30,40);
    box8=new Box(420,195,30,40);
    box9=new Box(390,155,30,40);
 ball=new Ball(600,500,80,80);
 rope=new Rope(ball.body,{x:600,y:150});
}

function draw(){
    background(200);
   



    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }