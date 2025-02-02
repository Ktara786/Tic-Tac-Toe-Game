let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("p");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgConatiner.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = ` Congratulation, Winner is ${winner}`;
  msgConatiner.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  let filledBoxes = 0;
  for (let Pattern of winPatterns) {
    let pos1 = boxes[Pattern[0]].innerText;
    let pos2 = boxes[Pattern[1]].innerText;
    let pos3 = boxes[Pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
  boxes.forEach((box) => {
    if (box.innerText !== "") {
      filledBoxes++;
    }
  });
  if (filledBoxes === boxes.length) {
    showDraw();
  }
};
const showDraw = () => {
  msg.innerText = "It's a draw!";
  msgConatiner.classList.remove("hide");
  disableBoxes();
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
