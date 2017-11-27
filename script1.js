const API = './videos.json';

document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('.player');

  program.init(player);
});
const program = (function() {
  //const id;
  var spilari;
  var video;

  function open() {
    const request = new XMLHttpRequest();

    const qs = new URLSearchParams(window.location.search);

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
    video.pause();
    takkarSettir();

    const back = document. querySelector('.back');

    back.classList.add('text__heading');
    back.addEventListener('click', () => {
      window.location = './index.html';
      empty(spilari);
    });
  }

  function takkarSettir() {
    const back = document.querySelector('.button__controls--back');
    back.addEventListener('click', () => {
      if(video.currentTime <= 3){
        video.currentTime = 0;
      } else {
        video.currentTime -= 3;
      }
    });

    const play = document.querySelector('.button__controls--play');
    play.addEventListener('click', () => {
      if(video.paused === true){
        video.play();
        const takki = document.querySelector('.button__controls--play');

        takki.classList.remove('button__controls--play');
        takki.classList.add('button__controls--pause');
        //Setja overlay
      } else {
        video.pause();
        const takki = document.querySelector('.button__controls--pause');

        takki.classList.remove('button__controls--pause');
        takki.classList.add('button__controls--play')
        //Taka af overlay
      }
    });

    const mute = document.querySelector('.button__controls--mute');
    mute.addEventListener('click', () => {
      if(video.muted == false){
        video.muted = true;
        const takki = document.querySelector('.button__controls--mute');
        takki.classList.remove('button__controls--mute');
        takki.classList.add('button__controls--notmute');
      } else {
        video.muted = false;
        const takki = document.querySelector('.button__controls--notmute');
        takki.classList.remove('button__controls--notmute');
        takki.classList.add('button__controls--mute');
      }
    });

    const full = document.querySelector('.button__controls--fullscreen');
    full.addEventListener('click', () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    });

    const forward = document.querySelector('.button__controls--forward');
    forward.addEventListener('click', () => {
      if((video.duration - video.currentTime) <= 3){
        video.currentTime = video.duration;
      } else {
        video.currentTime += 3;
      }
    });
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
