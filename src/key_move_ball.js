const ball = document.getElementById("ball");
const containerWidth = document.getElementById("container").offsetWidth;
const containerHeight = document.getElementById("container").offsetHeight;
let ballX = containerWidth / 2 ;
let ballY = containerHeight / 2 ;

function updateBallPosition() {
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    let ballMargin = ball.offsetWidth / 2;
    if (event.key === "ArrowLeft") {
      ballX -= 10;
      if (ballX < ballMargin) {
        ballX = ballMargin;
      }
    } else if (event.key === "ArrowRight") {
      ballX += 10;
      if (ballX > containerWidth - ballMargin) {
        ballX = containerWidth - ballMargin;
      }
    } else if (event.key == "ArrowUp") {
      ballY -= 10;
      if (ballY < ballMargin) {
          ballY = ballMargin;
      }
    } else if (event.key == "ArrowDown") {
      ballY += 10;
      if (ballY > containerHeight - ballMargin) {
          ballY = containerHeight - ballMargin;
      }
    }
    updateBallPosition();
}


