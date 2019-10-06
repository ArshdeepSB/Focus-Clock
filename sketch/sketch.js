let width = 200; 
let length = 300;
let input;
let button; 
function setup() {
  createCanvas(width, length);
  background(0);
}

function draw() {
	//to repeat the code
 for(let i = 1; i < 4; i++){
text('What do you want to do?', 15, length/4);
textSize(15);
fill(255);
//input = createInput();
//input.position(width/2, (length/4) + 10);

button = creatButton('Start');
button.position(width/2, (length/4)+ 20);
button.mousePressed(greet);

 }
}
