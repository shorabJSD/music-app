var songEl = document.getElementById("song");
var playPouseEl =document.getElementById("playPouse");
var inputEl = document.querySelector("input");

inputEl.addEventListener("onloadedmetadata", ()=>{
     inputEl.max = songEl.duration;
     inputEl.value = songEl.currentTime;
});

playPouseEl.addEventListener("click", ()=>{
    if (playPouseEl.classList.contains("bx-pause")) {
      songEl.pause();
      playPouseEl.classList.remove('bx-pause');
      playPouseEl.classList.add('bx-play');
      console.log("play btn add");
    }else{
     songEl.play();
     playPouseEl.classList.add("bx-pause");
     playPouseEl.classList.remove("bx-play");
     console.log("play btn remove");
    }
});

if (songEl.play()){
     setInterval(()=>{
          inputEl.value = songEl.currentTime;
     }, 500)
}

 inputEl.addEventListener("onchange", ()=>{
     songEl.play();
     playPouseEl.classList.add("bx-pause");
     playPouseEl.classList.remove("bx-play");
     console.log("yes it has changes")
 })











