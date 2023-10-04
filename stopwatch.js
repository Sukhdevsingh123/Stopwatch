var minuteResult=document.getElementById('minutes');
var secondReult=document.getElementById('seconds');
var msResult=document.getElementById('ms');
var startBtn=document.getElementById("button-start");
var stopBtn=document.getElementById("button-stop");
var resetBtn=document.getElementById("button-reset");
var minute=0;
var msSecond=0;
var second=0;
startBtn.addEventListener("click",()=>{
    // alert("hello");
    Interval = setInterval(startTimer, 10);
});
stopBtn.addEventListener('click',()=>{
    //alert("work");
    clearInterval(Interval);
})
resetBtn.addEventListener('click',()=>{
    //alert("work");
    clearInterval(Interval);
    secondReult.innerHTML="00";
    msResult.innerHTML="00";
    minuteResult.innerHTML="00";
    minute=0;
    msSecond=0;
    second=0;
    

    
})
function startTimer(){
msSecond++;
if(msSecond<=9){
msResult.innerHTML='0'+msSecond;
}
if(msSecond>9){
msResult.innerHTML=msSecond;

}
if(msSecond>99){
second++;
secondReult.innerText="0"+second;
msSecond=0;
msResult.innerHTML="0"+0;


}
if(second>9){
secondReult.innerHTML=second;
}
if(second==60){
minute++;
second=0;
minuteResult.innerHTML="0"+minute;
// secondReult.innerHTML="00";
}
if(minute>9){
minuteResult.innerHTML=minute;
}


}
