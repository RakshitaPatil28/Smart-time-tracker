/* TIMER */

let timerInterval;

function startTimer(){

let minutes=document.getElementById("timerMinutes").value;

if(minutes===""){
alert("Enter minutes");
return;
}

let total=minutes*60;

timerInterval=setInterval(function(){

let m=Math.floor(total/60);
let s=total%60;

document.getElementById("timerDisplay").innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

total--;

if(total<0){
clearInterval(timerInterval);
document.getElementById("timerDisplay").innerText="Finished!";
}

},1000);

}

function deleteTimer(){

clearInterval(timerInterval);

document.getElementById("timerDisplay").innerText="00:00";

document.getElementById("timerMinutes").value="";

}

/* USER STOPWATCH */

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

let display=document.createElement("h2");
display.innerText="00:00:00";

let startBtn=document.createElement("button");
startBtn.innerText="Start";

let stopBtn=document.createElement("button");
stopBtn.innerText="Stop";

let resetBtn=document.createElement("button");
resetBtn.innerText="Reset";

let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete User";

let seconds=0;
let minutes=0;
let hours=0;
let interval;

function update(){

seconds++;

if(seconds==60){
seconds=0;
minutes++;
}

if(minutes==60){
minutes=0;
hours++;
}

display.innerText=
`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

}

startBtn.onclick=function(){
interval=setInterval(update,1000);
}

stopBtn.onclick=function(){
clearInterval(interval);
}

resetBtn.onclick=function(){
clearInterval(interval);
seconds=0;
minutes=0;
hours=0;
display.innerText="00:00:00";
}

deleteBtn.onclick=function(){
clearInterval(interval);
userDiv.remove();
}

userDiv.appendChild(title);
userDiv.appendChild(display);
userDiv.appendChild(startBtn);
userDiv.appendChild(stopBtn);
userDiv.appendChild(resetBtn);
userDiv.appendChild(deleteBtn);

document.getElementById("userList").appendChild(userDiv);

document.getElementById("username").value="";

}
