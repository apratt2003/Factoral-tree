var angle = 0;
var trunk = 20;

function setup(){
  createCanvas(800,800);
  angle = degrees(random(.4,.45));
  console.log(angle);
  angleSlider = createSlider(.3,.5,.4, .01);
  lengthSlider = createSlider(50,200,100,10);
}

function draw(){
  background(51);
  angle = angleSlider.value();
  //console.log(angle);
  var len = lengthSlider.value();
  //console.log(len);
  stroke(255);
  strokeWeight(trunk);
  translate(400,height);
  branch(len);
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0,-len)

  if (len>=4) {
    strokeWeight(len/10);
    push();
    rotate(angle);
    branch(len * .7);
    pop();
    push();
    rotate(-angle);
    branch(len * .7);
    pop();

  }
}
