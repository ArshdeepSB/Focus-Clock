let width = 200;
let length = 400; 
let input; 
let button; 
let bool = 1; 
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let song;

function setup() {
  createCanvas(200, 400);
//mg = loadImage('documents/ofi-4k-3840x2160-wallpaper-D3A-800x540-MM-100.jpg');
    rect(0,0,200,400);
  text('What do you want to work', (width/2)-70, length/4);
    text('on today?', (width/2)-25, (length/4)+ 25);

  input = createInput();
  input.position((width/2)- 85, length - 200);

  button = createButton('submit');
  button.position(75, 220);
  button.mousePressed(notes);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 4;
  
  song = loadSound('lofiMusic.mp3');

}

function draw(){
  
if(bool == 2){
input.remove();
button.remove();
background(230);  
  bool =3;
}//end of if statment

  if(bool ==3 ){
  // Draw the clock background
  noStroke();
  fill(244, 122, 158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
  }
  
  song.play();
}//end of function draw


function notes() {
const work = input.value(); 
  print("I am going to finish " + work);
  bool = 2; 
}



