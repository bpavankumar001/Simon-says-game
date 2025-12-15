let gameSeq=[];
let userSeq=[];
let btns=["red","purple","green","yellow"];
let strted=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(strted===false)
    {
        console.log("Game Started");
        strted= true;
        levelUp();
    }
});

function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}


function levelUp()
{
    userSeq=[];
    level++; 
    h2.innerText=`level ${level}`;
      let randnum=Math.floor(Math.random()*4);
        let randcolor=btns[randnum];
        let randbtn=document.querySelector(`.${randcolor}`);
        // console.log(randcolor);
        gameSeq.push(randcolor);
        // console.log(randbtn);
        // console.log(randnum);
    gameflash(randbtn);
}

function checkAnswer(idx)
{
    highestscore=0;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } 
    else {
        if(level>highestscore)
        {
            highestscore=level;
        }
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 300);

    h2.innerHTML = `Game Over! <b>your score is ${level}<b> <br> press any key to start <br>highestscore: ${level}`;
    resetGame();
}

}


function btnpress()
{
    console.log(this);
    let btn=this;
    userflash(btn);

let userColor =btn.getAttribute("id");
userSeq.push(userColor);
checkAnswer(userSeq.length - 1);


}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function resetGame()
{
    level=0;
    gameSeq=[];
    userSeq=[];
    strted=false;
    
}