// Selectors///******/
const player =document.querySelector(".player");
const viewer =player.querySelector(".viewer");
const fullVideo =player.querySelector(".player__video");
const progressContainer =player.querySelector('.progress');
const progress =player.querySelector(".progress__filled");
const toggle =player.querySelector(".toggle");
const ranges =player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll('[data-skip]');
const full =player.querySelector(".full-player");


// Functions
function play(){
const method = viewer.paused ?'play':'pause';
viewer[method]();
}
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent =icon;
}
function updateSound(e){
    viewer[this.name] = this.value;   
}
function videoSkip(){
    viewer.currentTime += parseFloat(this.dataset.skip);
}
function progressButton(){
const currentProgress =(viewer.currentTime/viewer.duration)*100;
progress.style.flexBasis = `${currentProgress}%`;
}
function scrub(e){
    const scrubTime =(e.offsetX/progressContainer.offsetWidth)*viewer.duration;
    viewer.currentTime=scrubTime;
}
function fullScreen(){
    player.className +=":fullscreen";
    
    fullVideo.style.width=`${100}%`;
    // viewer.width =player.;
}
//event listeners
viewer.addEventListener('click',play);
viewer.addEventListener('play',updateButton);
viewer.addEventListener('pause',updateButton);
viewer.addEventListener('timeupdate',progressButton);
ranges.forEach(range=>range.addEventListener('change',updateSound));
skipButtons.forEach(range=>range.addEventListener('click',videoSkip));
progressContainer.addEventListener('click',scrub);
full.addEventListener('click',fullScreen);