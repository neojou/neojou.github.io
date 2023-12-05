const ball = document.getElementById("ball");
const containerWidth = document.getElementById("container").offsetWidth;
let ballPosition = 0;

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    if (event.key === "ArrowLeft") {
      ballPosition -= 10;
      if (ballPosition < ball.offsetWidth) {
        ballPosition = ball.offsetWidth;
      }
      ball.style.left = ballPosition + "px";
    } else if (event.key === "ArrowRight") {
      ballPosition += 10;
      if (ballPosition > containerWidth - ball.offsetWidth) {
        ballPosition = containerWidth - ball.offsetWidth;
      }
      ball.style.left = ballPosition + "px";
    }
    refresh();
}

function refresh() {
    ball.style.left = ballPostion + "px";
}

