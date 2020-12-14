// The first two coordinates are one end, the second two are the other end.
var line = [0, 0, 0, 0];
var lineChange = [1, 2, 3, 4];
var color = ["black", "red", "orange", "yellow", "green", "blue",  "purple", "violet"];
var i = 0;
var drawSnowflake = false;
var changeSnowflakeY = 1;
var changeY = 2;

class Snowflake {
  constructor(radius, color, velocity) {
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
}

var velocity1 = Math.random() * (0.005);
var velocity2 = Math.random() * (0.005);
var velocity3 = Math.random() * (0.005);

var snowflake1 = new Snowflake(60, "white", velocity1);
var snowflake2 = new Snowflake(20, "white", velocity2);
var snowflake3 = new Snowflake(45, "white", velocity3);

function changeColor(event) {
/*
  Purpose: This is to deterine if the click should trigger the hat changing color
  Inputs: The mouse click event
  Returns: None
*/
  var x = event.clientX;
  var y = event.clientY;
  if (x > 652 && x < 854) {
  } if (y > 18 && y < 73) {
      i += 1;
      if (i > 7) {
        i = 0;
      }
    }
  }

function snowflake(event) {
/*
  Purpose: This is to determine if the click should trigger drawing the snowman
  Inputs: The mouse click event
  Returns: None
*/
  var x = event.clientX;
  var y = event.clientY;
  if (x < 652 || x > 854) {
  } if (y < 18 || y > 73) {
      drawSnowflake = true;
      }
  }

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/

{
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#E5F8FF";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.closePath();

  // Sets the background color to light blue

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 4.75), 175, 0, 2 * Math.PI);
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the biggest circle for the bottom ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.76), 125, 0, 2 * Math.PI);
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the second biggest circle for the middle ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.205), 95, 0, 2 * Math.PI);
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the smallest circle for the top ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2.1, canvas.height - (canvas.height / 1.15), 15, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the left eye for the snowman

  context.beginPath();
  context.arc(canvas.width / 1.9, canvas.height - (canvas.height / 1.15), 15, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the right eye for the snowman

  context.beginPath();
  context.moveTo(canvas.width / 2.02, canvas.height - (canvas.height / 1.205));
  context.lineTo(canvas.width / 1.83, canvas.height - (canvas.height / 1.275));
  context.lineTo(canvas.width / 2.02, canvas.height - (canvas.height / 1.275));
  context.closePath();
  context.fillStyle = "orange";
  context.fill();
  context.stroke();

  // Draws the nose for the snowman

  context.beginPath();
  context.rect(canvas.width / 3.55, canvas.height / 2.35, 200, 38);
  context.fillStyle = "brown";
  context.fillRect(canvas.width / 3.55, canvas.height / 2.35, 200, 38);
  context.stroke();
  context.closePath();

  // Draws the left arm for the snowman

  context.beginPath();
  context.rect(canvas.width / 1.72, canvas.height / 2.35, 200, 38);
  context.fillStyle = "brown";
  context.fillRect(canvas.width / 1.72, canvas.height / 2.35, 200, 38);
  context.stroke();
  context.closePath();

  // Draws the right arm for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.5), 20, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.75), 20, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 2.1), 20, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 3), 25, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 4.5), 25, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 9), 25, 0, 2 * Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.rect(canvas.width / 2.13, canvas.height / 150, 100, 55);
  context.fillStyle = color[i];
  context.fillRect(canvas.width / 2.13, canvas.height / 150, 100, 55);
  context.rect(canvas.width / 2.3, canvas.height / 20, 200, 25);
  context.fillRect(canvas.width / 2.3, canvas.height / 20,200, 25);
  context.closePath();

  // Draws a hat that changes color based on the user's clicks for the snowman

  if (drawSnowflake) {
    if (changeY < 200) {
    changeY = changeY + changeSnowflakeY;
    velocity1 = velocity1 + (velocity1 / 4);
    context.fillStyle = snowflake1.color;

    context.beginPath();
    context.arc(200, 100 + velocity1,snowflake1.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1200, 100+velocity1,snowflake1.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    velocity2 = velocity2 + (velocity2 / 4);
    context.fillStyle = snowflake2.color;

    context.beginPath();
    context.arc(300, 50+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1400, 20+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(100, 400+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(300, 200+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1400, 300+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1300, 400+velocity2,snowflake2.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.fillStyle = snowflake3.color;
    velocity3 = velocity3 + (velocity3 / 4);

    context.beginPath();
    context.arc(500, 450+velocity3,snowflake3.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1400, 500+velocity3,snowflake3.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(1100, 420+velocity3,snowflake3.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(300, 550+velocity3,snowflake3.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    }

    else {
      changeY = 1;
      velocity1 = Math.random() * (0.005);
      velocity2 = Math.random() * (0.005);
      velocity3 = Math.random() * (0.005);
    }
  }

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}

window.addEventListener("mousedown", changeColor);
window.addEventListener("mousedown", snowflake);

// Get width/height of the browser window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

// Get the canvas, set the width and height from the window
canvas = document.getElementById("mainCanvas");
// I found that - 20 worked well for me, YMMV
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;
canvas.style.border = "1px solid blue";

// Set up the context for the animation
context = canvas.getContext("2d");

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
