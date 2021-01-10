var dog, dogImg, dogImg1;
var milkImg,milk;
var food, database

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
 
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  var food = database.ref("dog/food");
  food.on("value", readStock, showError);
  
  dog = createSprite(500,550,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  milk=createSprite(400,600,100,40)
  milk.shapeColor="yellow"
}


function draw() {  

  background(46, 138, 87); 

 
 if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg1);
   
}

  drawSprites();

  stroke("white");
  textSize(35);
    fill("white");
    text("Note: press UP_ARROW Key to feed Drago milk ",30,50)
    text("Milk Bottles Remaining  "+food,170,440);
}
function writeStock(x,y) {
  if(food<=0) {
    food=0;
    dog.addImage(dogImg);
  }
  else{
    food=Math.round(food-0.6)
  }
  }


function readStock(data) {
  food = data.val();
 
  
}

function showError(error) {
  console.log(error);
}

