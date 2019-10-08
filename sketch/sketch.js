let width = 200;
let length = 400; 
let input; 
let button; 
let button2; 
let button3;
let bool = 1; 
let song1;
let lofiBackground;
let lofiBackground1;



function setup() {
	lofiBackground = loadImage('clouds.jpg');
	lofiBackground1 = loadImage('streets.jpg');
  createCanvas(200, 400);

//mg = loadImage('documents/ofi-4k-3840x2160-wallpaper-D3A-800x540-MM-100.jpg');
    rect(0,0,200,400);
  
  input = createInput();
  input.position((width/2)- 85, length - 200);

  button = createButton('submit');
  button.position(75, 240);
  button.mousePressed(notes);

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
input.remove();
button.remove();
background(lofiBackground);  
  bool =3;
}//end of if statment

if(bool == 3){
  button = createButton('20 minutes');
  button.position(75, length/4);
  //button.mousePressed(Timer20);

  button2 = createButton('30 minutes');
  button2.position(75, length/2);
  //button2.mousePressed(Timer30);

  button3 = createButton('40 minutes');
  button3.position(75, 300);
  //button3.mousePressed(Timer40);
}
}//end of function draw


function loaded(){

	if(bool = 2){
		song1.play();
}
}
function notes() {
const work = input.value(); 
  print("I am going to finish " + work);
  bool = 2; 
}
