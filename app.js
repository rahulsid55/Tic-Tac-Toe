let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")



let turn = true;
let count = 0;

//store winning possibilites


const winningPossibilites = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () => {
    count=0
    turn = true;
    enableBoxes()
    msgContainer.classList.add("hide");
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const disbleBoxes = () => {
    for(let box of boxes){
        box.disabled=true
    }
}
const showWinner = (winner) => {
    count=0
    msg.innerText = `Congratulations ${winner}`
    msgContainer.classList.remove("hide");

}
const gameDraw = () => {
    count=0
    msg.innerText = "Its a Draw"
    msgContainer.classList.remove("hide");
}
boxes.forEach(box => {
    box.addEventListener('click',() => {
        if(turn){
            box.innerText = "X";
        }
        else{
            box.innerText = "O";
        }
        count++;
        box.disabled=true
        let winner = checkWinner()
        if(!winner && count==9){
            gameDraw()
        }
        turn = 1-turn
    })
});

const checkWinner = () => {
    for(pattern of winningPossibilites){
        let box1 = boxes[pattern[0]].innerText
        let box2 = boxes[pattern[1]].innerText
        let box3 = boxes[pattern[2]].innerText

        if(box1!="" && box2!="" && box3!=""){
            if(box1===box2 && box2===box3){
                showWinner(box1)
            }
        }
    }
    return false
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)
