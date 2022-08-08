//buttons

const start = document.getElementById("js-btn");
const stp = document.getElementById("js-stpBtn");
const breakNow = document.getElementById("js-break-now");
const shortBreak = document.getElementById("js-short-break");
const longBreak = document.getElementById("js-long-break");

//timer dom elements
let minutes = document.getElementById("js-minutes");
let seconds = document.getElementById("js-seconds");
let startTimer = 1;
let breakTimer = 1;

//event listeners
shortBreak.addEventListener("click", function () {
  breakTimer = 1;
  document.getElementById("js-short-break").classList.add("active");
  document.getElementById("js-long-break").classList.remove("active");

  console.log("short");
});
longBreak.addEventListener("click", function () {
  breakTimer = 2;
  document.getElementById("js-long-break").classList.add("active");
  document.getElementById("js-short-break").classList.remove("active");

  console.log("long");
});
start.addEventListener("click", function () {
  if (startTimer === 1) {
    startTimer = setInterval(countDownTimer, 1000);
  } else if (startTimer != 1) {
    alert("already running");
  }
  if (startTimer != 1) {
    player.loadVideoById("b7DrwqoHAGA"); // insert video id
    player.playVideo();
  }
});

stp.addEventListener("click", function () {
  clearInterval(startTimer);
  player.pauseVideo();
  if (startTimer != 1) {
    startTimer = 1;
  }
});
breakNow.addEventListener("click", function () {
  minutes.innerText = "00";
  seconds.innerText = "03";
  player.pauseVideo();
});

// a function that loops every second
function countDownTimer() {
  //take the value of the minutes and reduce them by 1
  let pauseFor = 0;
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 00) {
    seconds.innerText = 59;
    minutes.innerText--;
  }

  if (seconds.innerText < 10) {
    seconds.innerText = `0${seconds.innerText}`;
  }
  if (minutes.innerText == 00 && seconds.innerText == 01) {
    player.loadVideoById("");

    //pause old video
  }
  if (minutes.innerText == 00 && seconds.innerText == 00) {
    //break timer
    if (breakTimer == 1) {
      seconds.innerText = "00";
      minutes.innerText = 05;
      setTimeout(function () {
        player.loadVideoById("uCEv2NMr46E"); // insert video id;
      }, 3000);
      player.playVideo();
    }
    if (breakTimer == 2) {
      seconds.innerText = "00";
      minutes.innerText = 15;
      setTimeout(function () {
        player.loadVideoById("hZmFWMLvhZ0"); // insert video id;
      }, 3000);
      player.playVideo();
    }
  }

  // add alarm to come on via loop for once persecond
}
//YOUTUBE PLAYER
let player;
// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
    },
  });
}
//not sure but wont work without it
function onPlayerReady(event) {}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
