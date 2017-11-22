const API = './videos.json';

document.addEventListener('DOMContentLoaded', function() {
  const player = document.querySelector('.player');

  program.init(player);
});
const program = (function() {
  //const id;
  var spilari;
  var video;

  function open(id) {
    const request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function() {
      const data = JSON.parse(request.response);

      const numer = data.videos[id];
      video = numer.video;

      create(numer, spilari);
    };
    request.send();

  }
  function create(numer) {
    empty(spilari);
    const container = document.createElement('div');
    const titill = numer.title;
    spilari.appendChild(container);
    container.appendChild(document.createTextNode(titill));
    container.classList.add('text__heading');
    var myndband = document.getElementById("spilun");
    myndband = video;

    const video_play = document.createElement('video');
    video_play.src = myndband;


    container.appendChild(video_play);
    takkarSettir();
    play.addEventListener('click', () => {
      playTakki();
    });
    //video.play();

    const back = document. querySelector('.back');

    back.classList.add('text__heading');
    back.addEventListener('click', () => {
      window.location.href = index.html;
      empty(spilari);
    });
  }

  function takkarSettir(){
    const back = document.querySelector('.button__controls--back');
    back.addEventListener('click', spolaTilbaka());

    const play = document.querySelector('.button__controls--play');
    play.addEventListener('click', playTakki());

    const mute = document.querySelector('.button__controls--mute');
    mute.addEventListener('click', muteTakki());

    const full = document.querySelector('.button__controls--fullscreen');
    full.addEventListener('click', fullScreenTakki());

    const forward = document.querySelector('.button__controls--forward');
    forward.addEventListener('click', spolaAfram());
  }

  function playTakki(){
  if(video.paused == false){
    video.pause();
    const takki = document.querySelector('.button__controls--play');
    takki.classList.removeChild('button__controls--play');
    takki.classList.appendChild('button__controls--pause');
    //Setja overlay
  } else {
    video.play();
    const takki = document.querySelector('.button__controls--pause');
    takki.classList.removeChild('button__controls--pause');
    takki.classList.appendChild('button__controls--play');
    //Taka af overlay
  }
}

function muteTakki(){
  if(video.muted == false){
    video.muted = true;
    const takki = document.querySelector('.button__controls--mute');
    takki.classList.removeChild('button__controls--mute');
    takki.classList.appendChild('button__controls--notmute');
  } else {
    video.muted = false;
    const takki = document.querySelector('.button__controls--notmute');
    takki.classList.removeChild('button__controls--notmute');
    takki.classList.appendChild('button__controls--mute');
  }
}
function fullScreenTakki(){
  //video.requestFullscreen(); ---> þetta er eh skrítið
}

function spolaTilbaka(){
  if(video.currenttime <= 3){
    video.currenttime = 0;
  } else {
    video.currenttime -= 3;
  }
}

function spolaAfram(){
  if((video.duration - video.currenttime) <= 3){
    video.currenttime = video.duration;
  } else {
    video.currenttime += video.currenttime;
  }
}

  function empty(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  function init(player) {
    const id = 1;
    spilari = document.querySelector('.player__container');
    open(id);
  }
  return {
    init:init
  }

})();
