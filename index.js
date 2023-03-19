const handOptions = {
    "rock": "assets/rock.png",
    "paper": "assets/paper.png",
    "scissor": "assets/scissor.png"
}
var USERSCORE = 0;
var COMPUTERSCORE = 0;
// function to pick user hand


const pickUserHand = (hand) => {
    console.log(hand)
    let main = document.querySelector("main");
    main.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    document.getElementById("userpicked").src = handOptions[hand];
    let cpHand = pickComputerHand();
    result(hand, cpHand);

    if (USERSCORE > COMPUTERSCORE) {
        let nxt = document.querySelector(".nxt-btn");
        nxt.style.display = "block"
    }
}

// function to pick computer hand
const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissor"];
    let cpHand = hands[Math.floor(Math.random() * 3)];
    console.log(cpHand);
    document.getElementById("computerpicked").src = handOptions[cpHand];

    return cpHand;
}

const result = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOSE!");
        cpScore()
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        userScore();
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
        document.querySelector("#play-reset").innerText = "REPLAY";
    }
    if (userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        userScore();
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        cpScore()
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
        document.querySelector("#play-reset").innerText = "REPLAY";

    }
    if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("It's a tie!");
        document.querySelector("#play-reset").innerText = "REPLAY";
    }
    if (userHand == "scissor" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        cpScore()
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
    if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        userScore();
        document.querySelector("#play-reset").innerText = "PLAY AGAIN";
    }
}

const setDecision = (decison) => {
    console.log(decison)
    document.querySelector("#youwin").innerText = decison;
}

const userScore = (score) => {
    USERSCORE++;
    console.log(USERSCORE)
    document.querySelector("#userscore").innerHTML = USERSCORE;
    document.querySelector("#play-reset").innerHTML = "PLAY AGAI";
}
const cpScore = (score) => {
    COMPUTERSCORE++;
    console.log(COMPUTERSCORE)
    document.querySelector("#compscore").innerHTML = COMPUTERSCORE;
    document.querySelector("#play-reset").innerHTML = "PLAY AGAIN";
}


const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let main = document.querySelector("main");
    main.style.display = "flex";
}

const restartGame2 = () => {
    USERSCORE = 0;
    COMPUTERSCORE = 0;
    let scoreboard = document.querySelector(".Scoreboard");
    scoreboard.style.display = "flex";
    let main = document.querySelector("main");
    main.style.display = "flex";
    let contest = document.querySelector(".container");
    contest.style.display = "flex";
    let cup = document.querySelector(".cup");
    contest.style.display = "none";
    document.querySelector("#userscore").innerHTML = USERSCORE;
    document.querySelector("#compscore").innerHTML = COMPUTERSCORE;
}





const next = () => {
    let scoreboard = document.querySelector(".Scoreboard");
    scoreboard.style.display = "none";
    let main = document.querySelector("main");
    main.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    let cup = document.querySelector(".container");
    cup.style.display = "flex";
}


function Rule()
{
    let rulebar = document.querySelector(".rule");
    rulebar.style.display = "inline-flex";
}

function close()
{
    let rulebar2 = document.querySelector(".rule_bar");
    rulebar2.style.display="none"
}