let songs = [
    {titulo:'Controllah', artist:'Gorillaz', src:'./musics/Controllah.mp3', image:'./imgs/gorillaz.jpg'},
    {titulo:'Destá', artist:'Dorgival Dantas', src:'./musics/Dorgival Dantas - Destá.mp3', image:'./imgs/dorgival-dantas.jpeg'},
    {titulo:'Eu Sou Feliz Assim', artist:'Ferrugem', src:'./musics/Eu sou feliz assim.mp3', image:'./imgs/soufelizassim-ferrugem.jpeg'},
    {titulo:'KICK BACK', artist:'Kenshi Yonezu', src:'./musics/KICK BACK .mp3', image:'./imgs/kick-back.webp'},
    {titulo:'PRIDE.', artist:'Kendrick Lamar', src:'./musics/PRIDE.mp3', image:'./imgs/Damn.-Kendrick_Lamar.jpg'},
    {titulo:'Soldier Side - Intro', artist:'System of a Down', src:'./musics/Soldier Side - Intro.mp3', image:'./imgs/mezmerize-systemofdown.jpg'}
];

let song = document.querySelector('audio');
let indexSong = 0;
let songduration = document.querySelector('.end');
let image = document.querySelector('img');
let nameSong = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

song.addEventListener('timeupdate',updadebar);
songduration.textContent = secForMin(Math.floor((song.duration)));

document.querySelector('.btnplay').addEventListener('click',playsong);
document.querySelector('.btnpause').addEventListener('click',pausesong);
document.querySelector('.btnsetaBack').addEventListener('click', () => {
    indexSong--;
    if(indexSong <0){
        indexSong = 5;
    }
    renderSong(indexSong);
});
document.querySelector('.btnsetaPass').addEventListener('click', () => {
    indexSong++;
    if(indexSong >5){
        indexSong = 0;
    }
    renderSong(indexSong);
});

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
        nameSong.textContent = songs[index].titulo;
        nameArtist.textContent = songs[index].artist;
        image.src = songs[index].image;
        songduration.textContent = secForMin(Math.floor((song.duration)));
        song.play();
    });
}
function updadebar(){
   let bar = document.querySelector('progress');
   bar.style.width = Math.floor((song.currentTime / song.duration) * 100) + '%'; 

   let timepassed = document.querySelector('.start');
   timepassed.textContent = secForMin(Math.floor((song.currentTime)));
}







function secForMin(seconds){
    let fieldMinutes = Math.floor(seconds / 60);
    let fieldSeconds = seconds % 60;

    if(fieldSeconds < 10){
        fieldSeconds = '0' + fieldSeconds;
    }

    return fieldMinutes+ ':' +fieldSeconds;



}