//Firstly, I'm planning to growing a christmas tree. After this part solved, I'm thinking add some decoration on the tree. I straggle to make the bubbles within the tree.
//The interactivity is that when the user click on the sun, the tree will change the size randomly and the bubbles will change the location randomly. Meanwhile, when the user click on the bubble,it will change the color either.


//global variables
var x1,y1;//tree's position
var treeColor;
var myArray = [];//create blank array
var r,g,b;

//bubble constructor
function Bubble(){
    //create x and y properties
    this.x = random(100,300);
    this.y = random(100,300);
    this.r = 8;//r for radius
    this.bubbleSize = this.r*2;

    //method:draw the bubbles
    r = random(255);
    g = random(255);
    b = random(255);

    this.drawBubble = function(){
        fill(r,g,b);
        strokeWeight(0);

        ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }//end drawBubble

    this.changeColor = function(){
    r = random(255);
    g = random(255);
    b = random(255);
    this.drawBubble();
    }//end changeColor
}//end Bubble

var circleSize;//sun's size
var circleX,circleY;//sun's position
function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);

    circleX=500;
    circleY=50;
    circleSize = 50;
    drawTree(200,50,'DarkGreen',50);
    drawSun(500,50,50);
    //drawSun(circleX,circleY,circleSize);

    for(var i=0;i<20;i++){
    //add Bubbles to the array
    myArray[i] = new Bubble();
    myArray[i].drawBubble();//runs draw bubble function
    }
}//end setup

function drawTree(x1,y1,treeColor,trunkWidth){

    strokeWeight(0);
    fill(treeColor);

    triangle(x1,y1,x1*0.75,y1*2,x1*1.25,y1*2);
    triangle(x1,y1*1.6,x1*0.75*0.6667,y1*2*1.55,x1*1.25*1.2,y1*2*1.55);
    triangle(x1,y1*2.7,x1*0.75*0.3333,y1*2*2.55,x1*1.25*1.4,y1*2*2.55);
    fill('SaddleBrown');

    var trunkX = (x1*1.25*1.4) - (x1*1.25*1.4 - x1*0.75*0.3333)/2 - (trunkWidth/2);
    rect(trunkX,y1*2*2.55,trunkWidth,trunkWidth*1.5);
}

function drawSun(circleX,circleY,circleSize){

    strokeWeight(0);
    fill('DarkOrange');

    ellipse(circleX,circleY,circleSize,circleSize);
    strokeWeight(6);
    stroke('DarkOrange');
    //draw the top line
    line(circleX,circleY*0.4,circleX,circleY*0.06);

    //draw the right line
    line(circleX*1.06,circleY,circleX*1.096,circleY);

    //draw the left line
    line(circleX*0.94,circleY,circleX*0.904,circleY);

    //draw the buttom line
    line(circleX,circleY*1.6,circleX,circleY*1.96);

    line(circleX*0.96,circleY*1.5,circleX*0.94,circleY*1.8);
    line(circleX*1.04,circleY*0.52,circleX*1.06,circleY*0.26);
    line(circleX*0.93,circleY*0.36,circleX*0.95,circleY*0.6);
    line(circleX*1.04,circleY*1.5,circleX*1.06,circleY*1.7);
}//end drawSun function

function mousePressed() {
  var d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize) {
      var r = random(200,300);
     // circleX =r;
     // circleY  = r*0.1;
     // circleSize = r*0.1;
      background(255);

     drawTree(r,r*0.25,'DarkGreen',r*0.25);
       drawSun(500,50,50);
    // drawSun(circleX,circleY,circleSize);
  }//end if statement

    //loop through myArray and check if mouse is in each bubble
        var d2;
      for(var i=0;i<myArray.length;i++){
          d2 = dist(mouseX, mouseY, myArray[i].x, myArray[i].y);
          if (d2<myArray[i].r){
          myArray[i].changeColor();
          }//end if statement
      }//end for

     var d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize) {
    for(var i=0;i<20;i++){
    //add Bubbles to the array
    myArray[i] = new Bubble();
    myArray[i].drawBubble();//runs draw bubble function
    myArray[i].changeColor();
    }//end for statement
  }//end if statement
}//end mousePressed
