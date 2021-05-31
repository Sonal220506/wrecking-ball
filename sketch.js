const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var ball, rope;
var box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12,
 box13, box14, box15, box16, box17, box18, box19, box20;
 var holder;

var score = 0;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
    box5 = new Box(700,100,70,70);
    box6 = new Box(700,100,70,70);

    //log1 = new Log(810,260,300, PI/2);

    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);

   
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box13 = new Box(900,100,70,70);
    box14 = new Box(900,100,70,70);
    box15 = new Box(900,100,70,70);
    box16 = new Box(900,100,70,70);
    box17 = new Box(900,100,70,70);
    box18 = new Box(900,100,70,70);
    box19 = new Box(900,100,70,70);
    box20 = new Box(900,100,70,70);



   
    ball = new Ball(200,50);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:200, y:50});

    holder = new Holder(50, 400, 10, 600);


}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();


   

    ball.display();
    //log6.display();
    holder.display(); 

    rope.display();
    
    textSize(30);
    text("SCORE: " +score, 400, 50);
console.log(this.Visibility);

}

function mouseDragged(){
 //   if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, {x: 200 , y: 50});
        rope.attach(ball.body);

    }
}

