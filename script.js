window.onload = () => {

    var play = document.getElementsByClassName("play");
    let t = 0;
    var timer = document.getElementsByClassName("timer");
    var volume = document.getElementsByClassName("volume");
    var line = document.getElementsByClassName("line");
    var bar = document.getElementsByClassName("bar");
    var slider = document.getElementsByClassName("slider");
    var slider2 = document.getElementsByClassName("slider2");
    var audio = document.getElementsByTagName("audio");

    for (let i = 0; i < play.length; i++) {

        var dur;
        var c_dur;

        let timerId = setInterval(() => Ftime(), 100);

        /*Функция обновляющая таймер в реальном времени*/
        const Ftime = () => {

            c_dur = Math.floor(audio[i].currentTime / 60) + ":" + Math.floor((audio[i].currentTime % 60));
            dur = Math.floor(audio[i].duration / 60) + ":" + Math.floor((audio[i].duration % 60));
            timer[i].innerHTML = c_dur + "/" + dur;

            line[i].children[0].value = audio[i].currentTime / (audio[i].duration / 1000000);

            audio[i].volume = bar[i].children[0].value / 100;
            //console.log(bar.children[0].value);

            if (bar[i].children[0].value <= 1) {
                volume[i].children[1].style.backgroundImage = "url('./images/volume2.png')";
            }
            else {
                volume[i].children[1].style.backgroundImage = "url('./images/volume1.png')";
            }

            if (audio[i].currentTime == audio[i].duration) {
                play[i].childNodes[1].style.backgroundImage = "url('./images/play.png')";
                t = 0;
            }

        }

        slider[i].oninput = function () {
            // console.log(this.value);
            audio[i].currentTime = line[i].children[0].value * (audio[i].duration / 1000000);
        }


        play[i].onclick = () => {

            var img = play[i].childNodes[1];

            if (t == 0) {
                img.style.backgroundImage = "url('./images/pause.png')";
                t++;

                /*Play music*/
                audio[i].play();

                for (let j = 0; j < audio.length; j++) {
                    if (j != i) {
                        audio[j].pause();
                        play[j].childNodes[1].style.backgroundImage = "url('./images/play.png')";
                    }
                }

            }

            else {
                img.style.backgroundImage = "url('./images/play.png')";
                t = 0;

                /*Stop music*/
                audio[i].pause();

            }


        }

        volume[i].onclick = () => {

            if (bar[i].classList.contains("off")) { bar[i].classList.remove("off"); }
            else { bar[i].classList.add("off") };

        }


    }

}

