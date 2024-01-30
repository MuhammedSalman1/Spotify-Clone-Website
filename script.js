console.log("Welcome to Spotify");
// initialize the new varialble
let songindex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let gif =document.getElementById('gif');
let mastersongname =document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Salam-e-Ishq" ,filepath:"songs/3.mp3",Coverpath:"Covers/1.jpg"},
    {songName:"this dreams" ,filepath:"songs/4.mp3",Coverpath:"Covers/2.jpg"},
    {songName:"olden Piano" ,filepath:"songs/5.mp3",Coverpath:"Covers/3.jpg"},
    {songName:"you me and the Sunset" ,filepath:"songs/6.mp3",Coverpath:"Covers/4.jpg"},
    {songName:"Is this to be alone" ,filepath:"songs/2.mp3",Coverpath:"Covers/5.jpg"},
    {songName:"Every one need light" ,filepath:"songs/7.mp3",Coverpath:"Covers/6.jpg"},
    {songName:"pained silence" ,filepath:"songs/8.mp3",Coverpath:"Covers/7.jpg"},
    {songName:"always skies" ,filepath:"songs/9.mp3",Coverpath:"Covers/8.jpg"},
    {songName:"heartsick solitary" ,filepath:"songs/10.mp3",Coverpath:"Covers/9.jpg"},
    {songName:"touching nights" ,filepath:"songs/11.mp3",Coverpath:"Covers/3.jpg"},
    
]
// audioElement.play();

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].Coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;



})
// audio element play/pause
// audio element play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-pause');
        masterPlay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity = 0;
    }
});


//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add('fa-regular', 'fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0 || songindex !== i) {
            // If the audio is paused or it's a different song, play the clicked song
            makeAllPlays();
            gif.style.opacity = 1;
            songindex = i;
            e.target.classList.remove('fa-regular', 'fa-circle-play');
            e.target.classList.add('fa-solid', 'fa-pause');
            audioElement.src = songs[songindex].filepath;
            mastersongname.innerText = songs[songindex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-regular', 'fa-circle-play');
            masterPlay.classList.add('fa-solid', 'fa-pause');
        } else {
            // If the audio is playing for the clicked song, pause it
            audioElement.pause();
            e.target.classList.remove('fa-solid', 'fa-pause');
            e.target.classList.add('fa-regular', 'fa-circle-play');
            gif.style.opacity = 0;
        }
    });
});

// ...

document.getElementById('next').addEventListener('click',()=>{
    if(songindex >= 10){
        songindex=0;

    }else{
        songindex +=1;
    }
    audioElement.src =`songs/${songindex+1}.mp3`;
    mastersongname.innerText =songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');


})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex < 0){
        songindex = 0;

    }else{
        songindex -= 1;
    }
    audioElement.src =`songs/${songindex+1}.mp3`;
    mastersongname.innerText =songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');


})
