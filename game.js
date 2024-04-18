let playerscore = 0;
let computerscore = 0;

const yscore = document.getElementById("yscore")
const cscore = document.getElementById("cscore")

function playgame(playerchoice){
    console.log(playerchoice);
    var choices = ['rock','paper','scissors'];
    var computerchoice = choices[Math.floor(Math.random()*3)]
    var result;
    if(playerchoice === computerchoice)
    {
        result="Its a tie";
    }
    else if((playerchoice==="rock"&& computerchoice==="scissors") ||
            (playerchoice==="paper"&& computerchoice==="rock") ||
             (playerchoice==="scissors" && computerchoice==="paper") )
    {
         playerscore++;                                                                       
         yscore.value = playerscore;
    }
    else{                                                                                      
         computerscore++;
         cscore.value = computerscore;
    }

    
}


