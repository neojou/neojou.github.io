const ball = document.getElementById("ball");
const containerWidth = document.getElementById("container").offsetWidth;
let ballPosition = containerWidth / 2;

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    if (event.key === "ArrowLeft") {
      ballPosition -= 10;
      if (ballPosition < ball.offsetWidth) {
        ballPosition = ball.offsetWidth;
      }
    } else if (event.key === "ArrowRight") {
      ballPosition += 10;
      if (ballPosition > containerWidth - ball.offsetWidth) {
        ballPosition = containerWidth - ball.offsetWidth;
      }
    }
    refresh();
}

function refresh() {
    ball.style.left = ballPosition + "px";
}

