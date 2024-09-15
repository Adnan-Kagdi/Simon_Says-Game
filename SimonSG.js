let gameSq = [];
let userSq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","blue","brown","purple"];

document.addEventListener("keypress", function(){
   if(started == false){
   console.log("Game Started!");
   started = true;
   }
   levelUp();
})

function btnFlash(btn){
   btn.classList.add("flash");
  setTimeout(function(){
   btn.classList.remove("flash")
  }, 70)
};

function userFlash(btn){
   btn.classList.add("userFlash");
  setTimeout(function(){
   btn.classList.remove("userFlash")
  }, 70)
};

function levelUp(){
   userSq = [];
   level++;
   h2.innerText = `level ${level}`;

   let randIdx = Math.floor(Math.random()*3);
   let randBox = btns[randIdx];
   let randBtn = document.querySelector(`.${randBox}`);
   gameSq.push(randBox);
   console.log(gameSq);
   btnFlash(randBtn);    
}

function checkAns(idx){
   if(gameSq[idx] === userSq[idx]){
      console.log("Same sequence");
      if(gameSq.length == userSq.length){
         setTimeout(levelUp,1000);
      }
   } else{
      h2.innerHTML = `Game over! your score was <b>${level}</b> <br>Press any key to restart`;
      reset();
      gameOver();
   }
}

function gameOver(){
   let bdy = document.querySelector("body");
   bdy.classList.add("gmOvr")
setTimeout(function(){
   bdy.classList.remove("gmOvr")
},2000)
}

function userPress(){
   console.log(this);
   let btn = this;
   userFlash(btn);

   let userColor = btn.getAttribute("id");
   userSq.push(userColor);
   console.log(userSq);

   checkAns(userSq.length - 1);
   }

let allBtns = document.querySelectorAll(".innerBox");
for(btn of allBtns){
   btn.addEventListener("click", userPress);
}

function reset(){
   started = false;
   gameSq = [];
   userSq = [];
   level = 0;
   
}