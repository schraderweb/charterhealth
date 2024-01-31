const q1BtnYes = document.querySelector(".q1-btn-yes");
const q1BtnNo = document.querySelector(".q1-btn-no");
const q2BtnYes = document.querySelector(".q2-btn-yes");
const q2BtnNo = document.querySelector(".q2-btn-no");
const question3 = document.getElementById("question3");
const question2 = document.getElementById("question2");
const question1 = document.getElementById("question1");
let choiceUnder = true;
let choiceMedical = true;
const q2Btn = document.querySelector("#q2");
const q1Btn = document.querySelector("#q1");

q1Btn.style.display = "none";
q2Btn.style.display = "none";
document.getElementById("qualify").style.display = "none";
document.getElementById("dontqualify").style.display = "none";

const startToQualify = document.querySelector("#btn-tap-to");

const showText1 = () => {
    console.log(choiceMedical , choiceUnder);
    if(choiceMedical == false && choiceUnder == true ) {
        // var timerInterval = setInterval(startTimer, 1000);
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
    choiceMedical = true;
    showText1();
});
q2BtnNo.addEventListener("click", () => {
    q2Btn.style.display = "none";
    choiceMedical = false;
    showText1();
});


