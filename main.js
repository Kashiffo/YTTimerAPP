//buttons

const start = document.getElementById("js-btn");
const stp = document.getElementById("js-stpBtn");
const pomodoro = document.getElementById("js-pomodoro");
const shortBreak = document.getElementById("js-short-break");
const longBreak = document.getElementById("js-long-break");

//timer dom elements
let minutes = document.getElementById("js-minutes");
let seconds = document.getElementById("js-seconds");
let startTimer = 1;

//event listeners
start.addEventListener("click", function () {
  if (startTimer === 1) {
    startTimer = setInterval(countDownTimer, 1000);
  } else if (startTimer != 1) {
    alert("already running");
  }
  if (startTimer != 1) {
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

// a function that loops every second
function countDownTimer() {
  //take the value of the minutes and reduce them by 1

  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 00) {
    seconds.innerText = 59;
    minutes.innerText--;
  }

  if (seconds.innerText < 10) {
    seconds.innerText = `0${seconds.innerText}`;
  }
  if (minutes.innerText < 10) {
    minutes.innerText = `0${minutes.innerText}`;
  }
}
//each time seconds hits 00

//take the value of the seconds and reduce them by 1/second

//break timer
//if mins and secs == 00 the set mins and seconds to short or long break

// Youtube Player Lofii

// let info = document.getElementById("info");
// function onYouTubePlayerAPIReady() {
//   var player = new YT.Player("player", {
//     videoId: "uCEv2NMr46E", // this is the id of the video at youtube (the stuff after "?v=")
//     loop: true,
//     events: {
//       onReady: function (e) {
//         info.innerHTML = "video is loaded"; // checks the state
//         e.target.playVideo();
//         onPlayerReady;
//       },

//       onStateChange: function (event) {
//         if (event.data === 1) {
//           info.innerHTML = "video started playing";
//         }
//       },
//     },
//   });
// }

// global variable for the player
var player;

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

function onPlayerReady(event) {}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
