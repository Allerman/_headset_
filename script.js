let song = document.querySelector('audio');
let songduration = document.querySelector('.end');

songduration.textContent = secForMin(Math.floor(song.duration));

document.querySelector('.btnplay').addEventListener('click',playsong);
document.querySelector('.btnpause').addEventListener('click',pausesong);
document.querySelector('.btnseta').addEventListener('click',pausesong);

song.addEventListener('timeupdate',updadebar);

function playsong(){
    song.play();
    document.querySelector('.btnpause').style.display = 'block';
    document.querySelector('.btnplay').style.display = 'none';

}
function pausesong(){
    song.pause();
    document.querySelector('.btnpause').style.display = 'none';
    document.querySelector('.btnplay').style.display = 'block';
}
function updadebar(){
   let bar = document.querySelector('progress');
   bar.style.width = Math.floor((song.currentTime / song.duration) * 100) + '%'; 

   let timepassed = document.querySelector('.start');
   timepassed.textContent = secForMin(Math.floor(song.currentTime));
}

function secForMin(seconds){
    let fieldMinutes = Math.floor(seconds / 60);         
    let fieldSeconds = seconds % 60;

    if(fieldSeconds < 10){
        fieldSeconds = '0' + fieldSeconds;
    }

    return fieldMinutes+ ':' +fieldSeconds;
}