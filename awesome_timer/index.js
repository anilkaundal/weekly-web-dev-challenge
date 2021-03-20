let flag = true;
let desc = document.querySelector(".desc");
let [min, sec] = [2, 10];
let timer = document.querySelector(".timer");
let btn = document.querySelector(".button");
let btn_text = document.querySelector(".btn-txt");
let S = sec < 10 ? "0" + sec : sec;
let M = min < 10 ? "0" + min : min;
timer.innerHTML = `${M}:${S}`;

btn.addEventListener("click", () => {
  if (flag == true) {
    desc.innerHTML = "Time Remaining:";
    btn.disabled = true;
    flag = !flag;
    startTimer();
  }
});

function startTimer() {
  timerID = setInterval(function () {
    sec--;
    let M = min < 10 ? "0" + min : min;
    let S = sec < 10 ? "0" + sec : sec;
    if (sec <= 0 && min >= 1) {
      sec = 60;
      min--;
    } else if (min === 0 && sec === 0) {
      btn.disabled = false;
      desc.innerHTML = "Time's up!";
      btn_text.innerHTML = "RESET TIMER";
      btn_text.onclick = function () {
        location.reload();
      };
      clearInterval(timerID);
    }
    timer.innerHTML = `${M}:${S}`;
  }, 100);

  btn.removeEventListener("click", startTimer);
}
