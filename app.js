const q1BtnYes = document.querySelector(".q1-btn-yes");
const q1BtnNo = document.querySelector(".q1-btn-no");
const q2BtnYes = document.querySelector(".q2-btn-yes");
const q2BtnNo = document.querySelector(".q2-btn-no");
const q3BtnYes = document.querySelector(".q3-btn-yes");
const q3BtnNo = document.querySelector(".q3-btn-no");

const question3 = document.getElementById("question3");
const question2 = document.getElementById("question2");
const question1 = document.getElementById("question1");
let choiceUnder = true;
let choiceMedical = true;
let under65 = true;
const q2Btn = document.querySelector("#q2");
const q1Btn = document.querySelector("#q1");
const q3Btn = document.querySelector("#q3");

q1Btn.style.display = "none";
q2Btn.style.display = "none";
q3Btn.style.display = "none";
document.getElementById("qualify").style.display = "none";
document.getElementById("dontqualify").style.display = "none";

const startToQualify = document.querySelector("#btn-tap-to");


var timeLimitInMinutes = 4;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

function startTimer() {
    timeLimitInSeconds--;
    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;
  
    if (timeLimitInSeconds < 0) {
      timerElement.textContent = '00:00';
      clearInterval(timerInterval);
      return;
    }
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
  
    timerElement.textContent = minutes + ':' + seconds;
  }

const showText1 = () => {
    console.log(choiceMedical , choiceUnder);
    if(choiceMedical == false && choiceUnder == false && under65 == false ) {
        var timerInterval = setInterval(startTimer, 1000);
        document.getElementById("qualify").style.display = "block";
    }else {
        document.getElementById("dontqualify").style.display = "block";
    }
}


startToQualify.addEventListener("click", () => {
    q1Btn.style.display = "flex";
    q2Btn.style.display = "none";
    startToQualify.style.display = "none";
});
q1BtnYes.addEventListener("click", () => {
    q1Btn.style.display = "none";
    q2Btn.style.display = "flex";
    choiceUnder = true;
});
q1BtnNo.addEventListener("click", () => {
    q1Btn.style.display = "none";
    q2Btn.style.display = "flex";
    choiceUnder = false;
});
q2BtnYes.addEventListener("click", () => {
    q2Btn.style.display = "none";
    q3Btn.style.display = "flex";
    choiceMedical = true;
    // showText1();
});
q2BtnNo.addEventListener("click", () => {
    q2Btn.style.display = "none";
    q3Btn.style.display = "flex";
    choiceMedical = false;
    // showText1();
});
q3BtnYes.addEventListener("click", () => {
    q3Btn.style.display = "none";
    under65 = true;
    showText1();
});
q3BtnNo.addEventListener("click", () => {
    q3Btn.style.display = "none";
    under65 = false;
    showText1();
});


