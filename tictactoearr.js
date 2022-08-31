//reset button
//PvC mode

const playerOneMarker = "X";
const playerTwoMarker = "O";
const computerMarker = "O";

let playerOneState = true;
let playerTwoState = false;
let playerOneWinner = false;
let playerTwoWinner = false;

let playerOneArr = [];
let playerTwoArr = [];
let computerArr = [];

const computerChoices = [
    "one", "two", "three",
    "four", "five", "six",
    "seven", "eight", "nine"
];

let playing = false;

let playerVsPlayerMode = true;
let playerVsComputerMode = false;

const gameModeBtn = document.getElementById("gameModeButton");
const playerOneInput = document.getElementById("playerOne");
const playerTwoInput = document.getElementById("playerTwo");


//init
for (let button of document.getElementsByClassName("positions")) {
    button.addEventListener("click", onClickMove);
}

function onClickMove (e) {
if (playerVsPlayerMode) {
    onClickPvP(e);
}else if (playerVsComputerMode) {
    onClickPvC(e);
}

}
function onClickPvP (e) {
    const button = e.target;
    if (playing === true) {
        if (playerOneState === true) {
            button.textContent = playerOneMarker;
            button.disabled = true;
            playerOneState = false;
            playerTwoState = true;
            playerOneArr.push(button.id);
            if (winCheck(playerOneArr)) {
                document.getElementById("winner").textContent = ((document.getElementById("playerOne").value) + " Wins!");
                ducument.getElementsByClassName("positions").disabled = true;
            }
            return;

        } else if (playerTwoState === true) {
            button.textContent = playerTwoMarker;
            button.disabled = true;
            playerOneState = true;
            playerTwoState = false;
            playerTwoArr.push(button.id);
            if (winCheck(playerTwoArr)) {
                document.getElementById("winner").textContent = ((document.getElementById("playerTwo").value) + " Wins!");
                ducument.getElementsByClassName("positions").disabled = true;
            }
            return;
        }
    } else alert('Click "Play!" to begin playing');
}


function onClickPvC (e) {
    const button = e.target;
    if (playing === true && playerVsComputerMode === true) {
        if (playerOneState === true) {
            button.textContent = playerOneMarker;
            button.disabled = true;
            playerOneState = false;
            playerTwoState = true;
            playerOneArr.push(button.id);
            if (winCheck(playerOneArr)) {
                document.getElementById("winner").textContent = document.getElementById("playerOne").value + " Wins!";
                ducument.getElementsByClassName("positions").disabled = true;
            }
            playerOneState = false;
            playerTwoState  = true;
            computerSelect();
            return;

        } else if (playerTwoState === true) {
            button.textContent = computerMarker;
            button.disabled = true;
            playerTwoArr.push(button.id);
            if (winCheck(playerTwoArr)) {
                document.getElementById("winner").textContent = document.getElementById("playerTwo").value + " Wins!";
                ducument.getElementsByClassName("positions").disabled = true;
            }
            playerOneState = true;
            playerTwoState = false;
            return;
        }
    }else alert('Click "Play!" to begin playing');
}

function computerSelect() {
    //create sublist of available boxes
    let openMoves = [];
    for (let box of document.querySelectorAll(".positions")) {
        if (box.textContent === "") {
            openMoves.push(box);
        }
    }
    let computerChoice = openMoves[Math.floor(Math.random() * openMoves.length)];
        computerChoice.click();
}



//win check

const winConditions = [
                        ["one", "two", "three"], 
                        ["four", "five", "six"],
                        ["seven", "eight", "nine"],
                        ["one", "four", "seven"],
                        ["two", "five", "eight"],
                        ["three", "six", "nine"],
                        ["one", "five", "nine"],
                        ["three", "five", "seven"]
];

function winCheck (playerArr) {
    return winConditions.some(condition => condition.every(id => playerArr.includes(id)));
}

//Settings

//play & reset
const playBtn = document.getElementById("play");
playBtn.addEventListener("click", function playGame() {
    playing = true;
    playerOneState = true;
    playerTwoState = false;
    playerOneWinner = false;
    playerTwoWinner = false;
    playerOneArr = [];
    playerTwoArr = [];
    computerArr = [];
    for (let button of document.querySelectorAll(".positions")) {
        button.removeAttribute("disabled");
        button.textContent = "";
    }
    document.querySelector("#winner").textContent = "";

    if (playerVsPlayerMode) {
        if (playerOneInput.value === "") {
            playerOneInput.value = "Player One";
        }

        if (playerTwoInput.value === "") {
            playerTwoInput.value = "Player Two";
        }
    }
    else if (playerVsComputerMode) {
        if (playerOneInput.value === "") {
            playerOneInput.value = "Player One";
        }

        if (playerTwoInput.value === "") {
            playerTwoInput.value = "Computer";
        }
    }
});

//game mode

gameModeBtn.addEventListener("click", changeGameMode);

function changeGameMode() {
    if (gameModeBtn.textContent === "Player Vs. Computer") {
        gameModeBtn.textContent = "Player Vs. Player";
        playerTwoInput.placeholder = "Computer";
        playerOneInput.value = "";
        playerTwoInput.value = "";
        playerTwoInput.setAttribute("readonly", true);
        playerTwoInput.disabled = true;
        playerVsPlayerMode = false;
        playerVsComputerMode = true;
        playerOneState = true;
        playerTwoState = false;
        return;
    } else if (gameModeBtn.textContent === "Player Vs. Player") {
        gameModeBtn.textContent = "Player Vs. Computer";
        playerTwoInput.placeholder = "Player Two";
        playerOneInput.value = "";
        playerTwoInput.value = "";
        playerTwoInput.removeAttribute("readonly");
        playerTwoInput.disabled = false;
        playerVsPlayerMode = true;
        playerVsComputerMode = false;
        return;
    }
}















//functions

// function checkPlayerOneArr () {
//     playerOneArrLength = playerOneArr.length;
//     for (var i = 0; i < playerOneArrLength; i++) {
//         if (playerOneArr.every("one", "two", "three")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("four", "five", "six")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("seven", "eight", "nine")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("one", "four", "seven")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("two", "five", "eight")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("three", "six", "nine")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("one", "five", "nine")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }else if (playerOneArr.includes("three", "five", "seven")) {
//             return document.getElementById("winner").textContent = "Player One Wins!";
//         }
//     }
// }

// function checkPlayerTwoArr () {
//     playerTwoArrLength = playerTwoArr.length;
//     for (var i = 0; i < playerTwoArrLength; i++) {
//         if (playerTwoArr.includes("one", "two", "three")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("four", "five", "six")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("seven", "eight", "nine")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("one", "four", "seven")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("two", "five", "eight")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("three", "six", "nine")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("one", "five", "nine")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }else if (playerTwoArr.includes("three", "five", "seven")) {
//             return document.getElementById("winner").textContent = "Player Two Wins!";
//         }
//     }
// }







// function playerOneWin () {
//     if (playerOneArr.includes(1, 2, 3)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(3, 4, 5)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(6, 7, 8)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(0, 3, 6)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(1, 4, 7)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(2, 5, 8)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(0, 4, 8)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }else if (playerOneArr.includes(2, 4, 6)) {
//         return getElementById("winner").textContent = "Player One Wins!";
//     }
// }

// function playerTwoWin () {
//     if (playerTwoArr.includes(1, 2, 3)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(3, 4, 5)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(6, 7, 8)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(0, 3, 6)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(1, 4, 7)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(2, 5, 8)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(0, 4, 8)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }else if (playerTwoArr.includes(2, 4, 6)) {
//         return getElementById("winner").textContent = "Player Two Wins!";
//     }
// }

// function isGameOver() {
// 	const threeMarks = mark[currentPlayer].repeat(3);
// 	for (let win of wins) {
// 		let string = "";
// 		for (let index of win) {
// 			string += boxes[index].textContent;
// 		}
// 		if (string === threeMarks) return true;
// 	}
// 	return false;
// };








// function tieCheck () {

// }

// function reset () {
    
// }








// function winCheck () {
//     if (winArr[0] === winArr[1] === winArr[2]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[0] === winArr[1] === winArr[2]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[3] === winArr[4] === winArr[5]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[6] === winArr[7] === winArr[8]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[0] === winArr[3] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     }else if (winArr[1] === winArr[4] === winArr[7]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     }else if (winArr[2] === winArr[5] === winArr[8]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[0] === winArr[4] === winArr[8]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player One Wins!");

//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     } else if (winArr[2] === winArr[4] === winArr[6]) {
//         document.getElementById("winner").textContent = ("Player Two Wins!");
//     }
// }

//Board Array
// let winArr = [
// 0, 1, 2,
// 3, 4, 5,
// 6, 7, 8
// ];


//const mark = "XO"
// let wins = [
//     //rows
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     //columns
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     //diags
//     [0,4,8],
//     [2,4,6]
// ];

// arr.forEach((element, index) => {
//     arr[index] = element;
// });
// winArr = playerOneMarker