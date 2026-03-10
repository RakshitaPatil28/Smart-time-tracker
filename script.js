let seconds=0,minutes=0,hours=0;
let stopwatchInterval;

function saveUser(){

let name=document.getElementById("username").value;

if(name===""){
alert("Enter name");
return;
}

document.getElementById("userDisplay").innerText="User: "+name;

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

function createTimer(){

let min=document.getElementById("minutes").value;

if(min==""){
alert("Enter minutes");
return;
}

let totalSeconds=min*60;

let timerDiv=document.createElement("div");
timerDiv.className="timerBox";

let timeDisplay=document.createElement("h3");
timerDiv.appendChild(timeDisplay);

let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";

timerDiv.appendChild(deleteBtn);

document.getElementById("timerList").appendChild(timerDiv);

let timer=setInterval(function(){

let m=Math.floor(totalSeconds/60);
let s=totalSeconds%60;

timeDisplay.innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

totalSeconds--;

if(totalSeconds<0){
clearInterval(timer);
timeDisplay.innerText="Finished!";
}

},1000);

deleteBtn.onclick=function(){
clearInterval(timer);
timerDiv.remove();
}

}
let seconds=0,minutes=0,hours=0;
let stopwatchInterval;

function saveUser(){

let name=document.getElementById("username").value;

if(name===""){
alert("Enter name");
return;
}

document.getElementById("userDisplay").innerText="User: "+name;

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

function createTimer(){

let min=document.getElementById("minutes").value;

if(min==""){
alert("Enter minutes");
return;
}

let totalSeconds=min*60;

let timerDiv=document.createElement("div");
timerDiv.className="timerBox";

let timeDisplay=document.createElement("h3");
timerDiv.appendChild(timeDisplay);

let deleteBtn=document.createElement("button");
deleteBtn.innerText="Delete";

timerDiv.appendChild(deleteBtn);

document.getElementById("timerList").appendChild(timerDiv);

let timer=setInterval(function(){

let m=Math.floor(totalSeconds/60);
let s=totalSeconds%60;

timeDisplay.innerText=
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

totalSeconds--;

if(totalSeconds<0){
clearInterval(timer);
timeDisplay.innerText="Finished!";
}

},1000);

deleteBtn.onclick=function(){
clearInterval(timer);
timerDiv.remove();
}

}
