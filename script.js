
var hitRun = 0;
var timer = 60;
var score = 0;
function makeBubble() {
    var bubble = "";
  for (var i = 1; i <= 176; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div id="bubble" class=" bg-teal-300 w-10 h-10 rounded-full flex justify-center items-center">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = bubble;
}

function hitBubble() {
  hitRun = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerHTML = hitRun;
}

function runTimer() {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timer);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1 class="font-bold">Game Over ! Thanks...<br>
            Your score is ${score}</h1>`;
    }
  }, 1000);
}

function increaseScoreVal() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}

function decreaseScoreVal() {
  score -= 10;
  document.querySelector("#scoreval").innerHTML = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (hitRun == clickedNum) {
    increaseScoreVal();
    hitBubble();
    makeBubble();
  } else {
    alert("OPPS! You clicked on Wrong Bubble.")
    decreaseScoreVal();
    hitBubble();
    makeBubble();
  }
});
makeBubble();
runTimer();
hitBubble();
