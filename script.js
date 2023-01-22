window.addEventListener('load',checktime);
function checktime(){
    var date=new Date();
    var day=date.getDay();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var days=["SUN","MON","TUE","WED","THR","FRI","SAT"];
    day=days[day];
    var ampm=hour<12?"AM":"PM";
    hour=hour%12;
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    hour=hour?hour:'12';
    document.getElementById("day").innerHTML=day;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("ampm").innerHTML=ampm;
    setTimeout(checktime,100);
    
}