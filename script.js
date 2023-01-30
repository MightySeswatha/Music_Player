window.onload = () =>{

var play = document.getElementById("play");
let t = 0;
var timer = document.getElementById("timer");
var volume = document.getElementById("volume");
var line = document.getElementById("line");
var bar = document.getElementById("bar");
var slider = document.getElementById("myRange");

var x = new Audio('m1.mp3');
var dur;
var c_dur;



let timerId = setInterval(() => Ftime(),100);

/*Функция обновляющая таймер в реальном времени*/
const Ftime = () => {

c_dur = Math.floor(x.currentTime / 60)+":"+Math.floor((x.currentTime % 60));
dur = Math.floor(x.duration / 60)+":"+Math.floor((x.duration % 60));
timer.innerHTML = c_dur+"/"+dur;

line.children[0].value = x.currentTime/(x.duration/1000000);

x.volume = bar.children[0].value/100;
//console.log(bar.children[0].value);

if(bar.children[0].value <= 1){
volume.children[1].style.backgroundImage = "url('../images/volume2.png')";
}
else{
volume.children[1].style.backgroundImage = "url('../images/volume1.png')";
}

if(x.currentTime == x.duration){
    play.childNodes[1].style.backgroundImage = "url('../images/play.png')";
    t = 0;
}

}

slider.oninput = function() {
   // console.log(this.value);
    x.currentTime = line.children[0].value*(x.duration/1000000);
}


play.onclick = () => {
var img = play.childNodes[1];
console.log(img.src);

if(t == 0){
    img.style.backgroundImage = "url('../images/pause.png')";
    t++;

/*Play music*/
x.play();

}

else{
    img.style.backgroundImage = "url('../images/play.png')";
    t = 0; 

/*Stop music*/
x.pause();

}


}

volume.onclick = () => {

if(bar.classList.contains("off")){bar.classList.remove("off");}
else{bar.classList.add("off")};

}


}

