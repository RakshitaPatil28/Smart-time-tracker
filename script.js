let seconds=0;
let minutes=0;
let hours=0;

let stopwatchInterval;

function addUser(){

let name=document.getElementById("username").value;

if(name===""){
alert("Enter user name");
return;
}

let userDiv=document.createElement("div");
userDiv.className="userBox";

let userTitle=document.createElement("h3");
userTitle.innerText=name;

let deleteUser=document.createElement("button");
deleteUser.innerText="Delete User";

let timerInput=document.createElement("input");
timerInput.placeholder="Minutes";

let addTimerBtn=document.createElement("button");
addTimerBtn.innerText="Add Timer";

let timerArea=document.createElement("div");

userDiv.appendChild(userTitle);
userDiv.appendChild(deleteUser);
userDiv.appendChild(document.createElement("br"));
userDiv.appendChild(timerInput);
userDiv.appendChild(addTimerBtn);
userDiv.appendChild(timerArea);

document.getElementById("userList").appendChild(userDiv);

document.getElementById("username").value="";

deleteUser.onclick=function(){
userDiv.remove();
}

addTimerBtn.onclick=function(){

let min=timerInput.value;

if(min===""){
alert("Enter minutes");
return;
}

let total=min*60;

let timerDiv=document.createElement("div");

let timeDisplay=document.createElement("p");

let deleteTimerBtn=document.createElement("button");
deleteTimerBtn.innerText="Delete Timer";

timerDiv.appendChild(timeDisplay);
timerDiv.appendChild(deleteTimerBtn);

timerArea.appendChild(timerDiv);

let timer=setInterval(function(){

let m=Math.floor(total/60);
let s=total%60;

timeDisplay.innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

total--;

if(total<0){
clearInterval(timer);
timeDisplay.innerText="Finished!";
}

},1000);

deleteTimerBtn.onclick=function(){
clearInterval(timer);
timerDiv.remove();
}

}

}

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

document.getElementById("stopwatch").innerText=
`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

}

function startStopwatch(){
stopwatchInterval=setInterval(updateStopwatch,1000);
}

function stopStopwatch(){
clearInterval(stopwatchInterval);
}

function resetStopwatch(){

clearInterval(stopwatchInterval);

seconds=0;
minutes=0;
hours=0;

document.getElementById("stopwatch").innerText="00:00:00";

}
