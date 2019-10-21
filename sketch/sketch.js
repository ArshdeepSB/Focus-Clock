let width = 200;
let length = 400; 
let input; 
let timeInput; 
let nextButton;
let nextButton2;
let addMoreButton;
let button2; 
let button3;
let button4;
let bool = 1; 
let song1;
let lofiBackground;
let lofiBackground1;
var begin; 
//in minutes
var duration = 60; 
var minutes = 100;
var seconds = 20;
var choosenTime = -2;
var work; 
var ding 



function preload(){

	  ding = loadSound("ding.mp3");

}

function setup() {
	lofiBackground = loadImage('clouds.jpg');
	lofiBackground1 = loadImage('streets.jpg');
  createCanvas(200, 400);

    rect(0,0,200,400);
  
  input = createInput();
  input.position((width/2)- 77, length - 200);

  nextButton = createButton('Next');
  nextButton.position(130, 240);
  nextButton.mousePressed(workNext);

  addMoreButton = createButton('Add More');
  addMoreButton.position(45, 240);
  addMoreButton.mousePressed(clearTextInput);
  song1 = loadSound("lofiMusic.mp3", loaded);
}


function draw(){
  if (bool == 1){
 background(lofiBackground1);

  text('What do you want to work', (width/2)-90, length/4);
    text('on today?', (width/2)-35, (length/4)+ 25);
    fill(255);
    textSize(15);
}
if(bool == 2){
nextButton.remove();
addMoreButton.remove();
background(lofiBackground);  
  bool =3;
}//end of if statment


else if(bool == 3){
addButtons();
stroke(1);
  text("I am going to finish " + work + " !", 10, 360);
noStroke();

}

 else if(bool == 4){
 	background(lofiBackground);  
 	stroke(1);
  text("I am going to finish " + work + " !", 10, 360);
noStroke();


      if (seconds > 0){  
    seconds = duration - (millis() - begin)/1000;
    seconds = floor(seconds);
  }//end of seconds if
   else {
     duration = 60;
   minutes--; 
     seconds = 60;
       text("I am going to finish " + work + " !", 10, 360);

   }
     if(minutes >= 0){
        fill(255);
      text(minutes, 50 - 10, 150);
      textSize(40);
      text(':',73 + 20, 145);
         textSize(40);
      text(seconds, 80 + 30, 150);
         textSize(40);
      noFill();
        text("I am going to finish " + work + " !", 10, 360);

     }
     else{
       fill(255);
     text("Time up!", 20, 150);
     ding.play();
       textSize(40);
       noFill();
         text("I am going to finish " + work + " !", 10, 360);

     }

     
     }

}//end of function draw


function loaded(){

	if(bool >= 2){
		song1.play();
}
}

function workNext() { 
   work = input.value();
  bool = 2; 
    clearTextInput();
}

function timeNext(){
const timeInput = input.value();
  print(timeInput);
  if (timeInput >= 1){
  minutes = timeInput - 1;
  bool = 4; 
      begin = millis(); 

}
}

function clearTextInput(){
  const work = input.value();
  print("I am going to finish " + work);
  input.remove();
    input = createInput();
  input.position((width/2)- 85, length - 200);
}

function addButtons(){
  
  input.position((width/2)- 77, length - 135);
  nextButton2 = createButton('Next');
  nextButton2.position(85, 290);
    nextButton2.mousePressed(timeNext);
}