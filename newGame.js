// The first two coordinates are one end, the second two are the other end.
var line = [0, 0, 0, 0];
var lineChange = [1, 2, 3, 4];
var color = ["black", "red", "orange", "yellow", "green", "blue",  "purple", "violet"];
var i = 0;



function changeColor(event) {
  console.log(event)
  var x = event.clientX;
  var y = event.clientY;
  console.log(x)
  console.log(y)
  if (x > 652 && x < 854) {
    // console.log("correct x value");
  } if (y > 18 && y < 73) {
      // console.log("correct y value");
      // console.log("In I")
      // console.log(x)
      // console.log(y)
      i += 1
      if (i > 7) {
        i = 0;
      }
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
  context.rect(0, 0, canvas.width, canvas.height)
  context.fillStyle = "#E5F8FF"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.closePath();

  // Sets the background color to light blue

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 4.75), 175, 0, 2 * Math.PI)
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the biggest circle for the bottom ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.76), 125, 0, 2 * Math.PI)
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the second biggest circle for the middle ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.205), 95, 0, 2 * Math.PI)
  context.fillStyle = "#7FDCFF";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the smallest circle for the top ball of the snowman

  context.beginPath();
  context.arc(canvas.width / 2.1, canvas.height - (canvas.height / 1.15), 15, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws the left eye for the snowman

  context.beginPath();
  context.arc(canvas.width / 1.9, canvas.height - (canvas.height / 1.15), 15, 0, 2 * Math.PI)
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
  context.rect(canvas.width / 3.55, canvas.height / 2.35, 200, 38)
  context.fillStyle = "brown";
  context.fillRect(canvas.width / 3.55, canvas.height / 2.35, 200, 38);
  context.stroke();
  context.closePath();
  // context.rotate(20 * Math.PI / 180);

  // Draws the left arm for the snowman

  context.beginPath();
  context.rect(canvas.width / 1.72, canvas.height / 2.35, 200, 38)
  context.fillStyle = "brown";
  context.fillRect(canvas.width / 1.72, canvas.height / 2.35, 200, 38);
  context.stroke();
  context.closePath();
  // context.rotate(20 * Math.PI / 180);

  // Draws the right arm for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.5), 20, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 1.75), 20, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 2.1), 20, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 3), 25, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 4.5), 25, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - (canvas.height / 9), 25, 0, 2 * Math.PI)
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();

  // Draws a button for the snowman

  context.beginPath();
  context.rect(canvas.width / 2.13, canvas.height / 150, 100, 55)
  context.fillStyle = color[i];
  context.fillRect(canvas.width / 2.13, canvas.height / 150, 100, 55)
  context.rect(canvas.width / 2.3, canvas.height / 20, 200, 25)
  context.fillRect(canvas.width / 2.3, canvas.height / 20,200, 25)
  context.closePath();

  // Draws a hat that changes color based on the user's clicks for the snowman




  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);


  // context.beginPath();
  // context.rect(150,250,375,375);
  // context.fillStyle = "#FF0000";
  // context.fillRect(150,250,375,375);
  // context.stroke();
  // context.closePath();

  // Draws a red rectangle
}

window.addEventListener("mousedown", changeColor);

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
