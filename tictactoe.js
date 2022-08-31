//app variables
const marks = ["X", "O"];
const playerOne = "X";
const playerTwo = "O";


//game state
// "mode" pvp  pvc cvp
let currentPlayer = 0;

//functions

function computerMove () {

}//on user click, mark "O" in spot




function checkWinner () {
    if (
        document.querySelector("#one").textContent == "X" &&
        document.querySelector("#two").textContent == "X" &&
        document.querySelector("#three").textContent == "X"
        ) {
            return document.querySelector("#winner span").textContent = "Player One Wins!";

    }else if (
        document.querySelector("#four").textContent == "X" &&
        document.querySelector("#five").textContent == "X" &&
        document.querySelector("#six").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"
        
    }else if (
        document.querySelector("#seven").textContent == "X" &&
        document.querySelector("#eight").textContent == "X" &&
        document.querySelector("#nine").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"

    }else if (
        document.querySelector("#one").textContent == "X" &&
        document.querySelector("#four").textContent == "X" &&
        document.querySelector("#seven").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"

    }else if (
        document.querySelector("#two").textContent == "X" &&
        document.querySelector("#five").textContent == "X" &&
        document.querySelector("#eight").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"

    }else if (
        document.querySelector("#three").textContent == "X" &&
        document.querySelector("#six").textContent == "X" &&
        document.querySelector("#nine").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"
    
    }else if (
        document.querySelector("#one").textContent == "X" &&
        document.querySelector("#five").textContent == "X" &&
        document.querySelector("#nine").textContent == "X"
        ) {
            document.querySelector("#winner span").textContent = "Player One Wins!"

    } else if (
    document.querySelector("#three").textContent == "X" &&
    document.querySelector("#five").textContent == "X" &&
    document.querySelector("#seven").textContent == "X" 
    ) {
        document.querySelector("#winner span").textContent = "Player One Wins!"
    
    }
}//checks to see if 3 in a row



//init
function init () {
    for (let button of document.querySelectorAll("button")) {
        button.addEventListener("click", onClick);
        
        function onClick (e) {
            const button = e.target;
                button.textContent = marks[currentPlayer];
                button.disabled = true;
                currentPlayer ^= 1;
                checkWinner();
        }
    }
}
init();

