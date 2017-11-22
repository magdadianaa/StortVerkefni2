const API = './videos.json';

document.addEventListener('DOMContentLoaded', function() {
  const player = document.querySelector('.player');

  program.init(player);
});
const program = (function() {
  //const id;
  var spilari;
  var video;

  function open() {
    const request = new XMLHttpRequest();

    const qs = new URLSearchParams(
      window.location.search);

    const id = qs.get('id');
    const gildi = id.substring(2, 3);
    const tala = parseInt(gildi);

    request.open('GET', API, true);
    request.onload = () => {
      if(request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response);
        const numer = data.videos[tala-1];
        create(numer);
      } else {
        spilari.appendChild(document.createTextNode('Ekki fannst neitt myndband'));
      }
    };
    request.send();

  }
  function create(numer) {
    empty(spilari);
    const container = document.createElement('div');
    const titill = numer.title;
    var myndband = numer.video;

    spilari.appendChild(container);
    container.appendChild(document.createTextNode(titill));
    container.classList.add('text__heading');
    container.classList.add('container__video');

    video = document.createElement('video');
    video.src = myndband;


    container.appendChild(video);
    takkarSettir();
    play.addEventListener('click', () => {
      playTakki();
    });
    //video.play();

    const back = document. querySelector('.back');

    back.classList.add('text__heading');
    back.addEventListener('click', () => {
      window.location = './index.html';
      empty(spilari);
    });
  }

  function takkarSettir() {
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
    spilari = document.querySelector('.player__container');
    open();
  }
  return {
    init:init
  }

})();
