let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn0=true;
const winPatterns=[
    [1,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turn0){
    box.innerText="O";
    turn0=false;
}
else{ box.innerText="X";
turn0=true;
}

box.disabled=true;
checkWinner();
 });
});


const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText; 
        let pos2Val= boxes[pattern[1]].innerText; 
        let pos3Val= boxes[pattern[2]].innerText; 

        if(pos1Val !=""  && pos2Val !="" && pos3Val !=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);


            }

        }
    }
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
