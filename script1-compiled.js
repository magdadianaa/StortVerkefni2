'use strict';

var API = './videos.json';

document.addEventListener('DOMContentLoaded', function () {
  var player = document.querySelector('.player');

  program.init(player);
});
var program = function () {
  //const id;
  var spilari;
  var video;

  function open() {
    var request = new XMLHttpRequest();

    var qs = new URLSearchParams(window.location.search);

    var id = qs.get('id');
    var gildi = id.substring(2, 3);
    var tala = parseInt(gildi);

    request.open('GET', API, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);
        var numer = data.videos[tala - 1];
        create(numer);
      } else {
        spilari.appendChild(document.createTextNode('Ekki fannst neitt myndband'));
      }
    };
    request.send();
  }
  function create(numer) {
    empty(spilari);
    var container = document.createElement('div');
    var titill = numer.title;
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

    /*play.addEventListener('click', () => {
      playTakki();
    });
    //video.play();
    */
    var back = document.querySelector('.back');

    back.classList.add('text__heading');
    back.addEventListener('click', function () {
      window.location = './index.html';
      empty(spilari);
    });
  }

  function takkarSettir() {
    var back = document.querySelector('.button__controls--back');
    back.addEventListener('click', function () {
      if (video.currenttime <= 3) {
        video.currenttime = 0;
      } else {
        video.currenttime -= 3;
      }
    });

    var play = document.querySelector('.button__controls--play');
    play.addEventListener('click', function () {
      if (video.paused === true) {
        video.play();
        var takki = document.querySelector('.button__controls--play');

        takki.classList.remove('button__controls--play');
        takki.classList.add('button__controls--pause');
        //Setja overlay
      } else {
        video.pause();
        var _takki = document.querySelector('.button__controls--pause');

        _takki.classList.remove('button__controls--pause');
        _takki.classList.add('button__controls--play');
        //Taka af overlay
      }
    });

    var mute = document.querySelector('.button__controls--mute');
    mute.addEventListener('click', function () {
      if (video.muted == false) {
        video.muted = true;
        var takki = document.querySelector('.button__controls--mute');
        takki.classList.remove('button__controls--mute');
        takki.classList.add('button__controls--notmute');
      } else {
        video.muted = false;
        var _takki2 = document.querySelector('.button__controls--notmute');
        _takki2.classList.remove('button__controls--notmute');
        _takki2.classList.add('button__controls--mute');
      }
    });
    /*
    const full = document.querySelector('.button__controls--fullscreen');
    full.addEventListener('click', () => {
      //video.requestFullscreen(); ---> þetta er eh skrítið
    }
    */
    var forward = document.querySelector('.button__controls--forward');
    forward.addEventListener('click', function () {
      if (video.duration - video.currenttime <= 3) {
        video.currenttime = video.duration;
      } else {
        video.currenttime += 3;
      }
    });
  }

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  function init(player) {
    spilari = document.querySelector('.player__container');
    open();
  }
  return {
    init: init
  };
}();

//# sourceMappingURL=script1-compiled.js.map