let song = document.querySelector('audio');
let songs = [
    {title:'Controllah', artist:'Gorillaz', src:'./musics/Controllah.mp3', img:'./imgs/gorillaz.jpg'},
    {title:'Destá', artist:'Dorgival Dantas', src:'./musics/Dorgival Dantas - Destá.mp3', img:'./imgs/dorgival-dantas.jpeg'},
    {title:'Eu Sou Feliz Assim', artist:'Ferrugem', src:'./musics/Eu sou feliz assim.mp3', img:'./imgs/soufelizassim-ferrugem.jpeg'},
    {title:'KICK BACK', artist:'Kenshi Yonezu', src:'./musics/KICK BACK .mp3', img:'./imgs/kick-back.webp'},
    {title:'PRIDE.', artist:'Kendrick Lamar', src:'./musics/PRIDE.mp3', img:'./imgs/Damn.-Kendrick_Lamar.jpg'},
    {title:'Soldier Side - Intro', artist:'System of a Down', src:'./musics/Soldier Side - Intro.mp3', img:'./imgs/mezmerize-systemofdown.jpg'}
];

let songduration = document.querySelector('.end');
let image = document.querySelector('img');
let nameSong = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

songduration.textContent = secForMin(Math.floor((song.duration)));

document.querySelector('.btnplay').addEventListener('click',playsong);
document.querySelector('.btnpause').addEventListener('click',pausesong);
document.querySelector('.btnseta').addEventListener('click',pausesong);

document.querySelector('.btnsetaBack').addEventListener('click', () => {
    indexSong--;
    renderSong(indexSong);
})
document.querySelector('.btnsetaPass').addEventListener('click', () => {
    indexSong++;
    renderSong(indexSong);
})

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
function renderSong(index){
    
    song.setAttribute('src', songs[index].src);
    song.addEventListener('loadeddata', ()=> {
        nameSong.textContent = songs[index].title;
        nameArtist.textContent = songs[index].artist;
        image.src = songs[index].img;
        songduration.textContent = secForMin(Math.floor((song.duration)));
    });
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