function addUser(){

let name=document.getElementById("username").value;

if(name===""){
alert("Enter user name");
return;
}

let userDiv=document.createElement("div");
userDiv.className="userBox";

let title=document.createElement("h3");
title.innerText=name;

/* STOPWATCH */

let swDisplay=document.createElement("h2");
swDisplay.innerText="00:00:00";

let startBtn=document.createElement("button");
startBtn.innerText="Start";

let stopBtn=document.createElement("button");
stopBtn.innerText="Stop";

let resetBtn=document.createElement("button");
resetBtn.innerText="Reset";

/* TIMER */

let timerInput=document.createElement("input");
timerInput.placeholder="Minutes";

let timerDisplay=document.createElement("h3");
timerDisplay.innerText="00:00";

let timerBtn=document.createElement("button");
timerBtn.innerText="Start Timer";

let deleteTimerBtn=document.createElement("button");
deleteTimerBtn.innerText="Delete Timer";

/* DELETE USER */

let deleteUser=document.createElement("button");
deleteUser.innerText="Delete User";

/* STOPWATCH VARIABLES */

let seconds=0;
let minutes=0;
let hours=0;
let swInterval;

function updateStopwatch(){

seconds++;

if(seconds==60){
seconds=0;
minutes++;
}

if(minutes==60){
minutes=0;
hours++;
}

swDisplay.innerText =
`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

}

startBtn.onclick=function(){
swInterval=setInterval(updateStopwatch,1000);
}

stopBtn.onclick=function(){
clearInterval(swInterval);
}

resetBtn.onclick=function(){
clearInterval(swInterval);
seconds=0;
minutes=0;
hours=0;
swDisplay.innerText="00:00:00";
}

/* TIMER */

let timerInterval;

timerBtn.onclick=function(){

let total=timerInput.value*60;

if(total<=0){
alert("Enter minutes");
return;
}

timerInterval=setInterval(function(){

let m=Math.floor(total/60);
let s=total%60;

timerDisplay.innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

total--;

if(total<0){
clearInterval(timerInterval);
timerDisplay.innerText="Finished!";
}

},1000);

}

deleteTimerBtn.onclick=function(){
clearInterval(timerInterval);
timerDisplay.innerText="00:00";
timerInput.value="";
}

/* DELETE USER */

deleteUser.onclick=function(){
clearInterval(swInterval);
clearInterval(timerInterval);
userDiv.remove();
}

/* ADD ELEMENTS */

userDiv.appendChild(title);

userDiv.appendChild(swDisplay);
userDiv.appendChild(startBtn);
userDiv.appendChild(stopBtn);
userDiv.appendChild(resetBtn);

userDiv.appendChild(document.createElement("hr"));

userDiv.appendChild(timerInput);
userDiv.appendChild(timerDisplay);
userDiv.appendChild(timerBtn);
userDiv.appendChild(deleteTimerBtn);

userDiv.appendChild(document.createElement("br"));

userDiv.appendChild(deleteUser);

document.getElementById("userList").appendChild(userDiv);

document.getElementById("username").value="";

}
