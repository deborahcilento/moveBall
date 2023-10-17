var ball = document.getElementById("ball")
var reverseX = false
var reverseY = false
//write a function that can change the position of the html element "ball"

var velocity = 10
var positionX = 0 
var positionY = 200

function moveBall() {

  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1390;
  var Ymin = 0;
  var Ymax = 700;

  if (reverseX) {

    positionX -= velocity;
    ball.style.left = positionX + "px";
    

  } else {

    positionX += velocity;
    ball.style.left = positionX + "px";
    
  }

  if(reverseY){

    positionY -= velocity;
    ball.style.top = positionY + "px"

  } else {

    positionY += velocity
    ball.style.top = positionY + "px"

  }


  if (positionX > Xmax || positionX <= Xmin) {
    reverseX =! reverseX;

  }

  if(positionY > Ymax || positionY <= Ymin){

    reverseY =! reverseY;

  }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 20);