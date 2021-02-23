const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var banana,baa,aa

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  banana=new BaseClass(random(10,800),1,100,100)
  banana=new BaseClass(random(10,800),1,100,100)
  basket=new Basket(100,200,100,100);
  baa=new Apple(random(10,800),1,100,100)
  baa=new Apple(random(10,800),1,100,100)
  aa=new PineApll(random(10,800),1,100,200)
  aa=new PineApll(random(10,800),1,100,200)


}

function draw() {
  background("lightblue");  

  if(frameCount%100===0){
    banana=new BaseClass(random(10,800),1,100,100)
  }
  if(frameCount%150===0){
    baa=new Apple(random(10,800),1,100,100)
  }
  if(frameCount%150===0){
    aa=new PineApll(random(10,800),1,100,100)
  }
  Engine.update(engine);
  banana.display();
  basket.display();
  baa.display();
  aa.display();
  drawSprites();
}