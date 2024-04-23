let playerscore = 0;
let computerscore = 0;

const element = document.querySelectorAll('.btns');
let shadowIndex = 0;
const shadowColors = [
  '0 0 40px rgba(0, 0, 255, 0.7)', // Light shade
  '0 0 50px rgba(0, 255, 0, 0.7)', // Medium shade
  '0 0 40px rgba(255, 0, 0, 0.7)'     // Dark shade
];

const yscore = document.getElementById("yscore");
const cscore = document.getElementById("cscore");
const choice = document.querySelector(".choice");
const choice_display = document.querySelector(".choice_display");
const next = document.querySelector(".next");
const hurray = document.querySelector(".hurray");
const rule = document.getElementById("showRules");
const scorebord = document.querySelector(".scorebord");
const result = document.querySelector(".result");
const container = document.querySelector(".container");


function playgame(playerchoice) {
    console.log(playerchoice);
    var choices = ['rock', 'paper', 'scissors'];
    var computerchoice = choices[Math.floor(Math.random() * 3)];
    if (playerchoice === computerchoice) 
    {
        // It's a tie
        result.innerHTML="It's a tie "
    } 
    else if ((playerchoice === "rock" && computerchoice === "scissors") ||
        (playerchoice === "paper" && computerchoice === "rock") ||
        (playerchoice === "scissors" && computerchoice === "paper")) 
    {
        playerscore++;
        yscore.value = playerscore;
        result.innerHTML="You Win"
        next.style.display = ""
    }
    else 
    {
        computerscore++;
        cscore.value = computerscore;
        result.innerHTML="You Lost "
    }

    choice.style.display = "none";
    choice_display.style.display = "flex";
    toggleShadow()
}

function hurray_page() {
    hurray.style.display = "flex";
    scorebord.style.display = "none"
    choice_display.style.display = "none"

}

function play_again(){
    choice_display.style.display = "none"
    choice.style.display = ""
    hurray.style.display = "none"
    scorebord.style.display = ""
}

function toggleShadow() {
  element.style.boxShadow = shadowColors[shadowIndex];
  shadowIndex = (shadowIndex + 1) % shadowColors.length;
}

// Set the blinking interval
setInterval(toggleShadow, 1000); // Change 1000 to adjust blinking speed in milliseconds
