'use strict';

var API = './videos.json';

var program = function program1() {
  var spilari = void 0;
  var video = void 0;

  /**
  * Tæmir boxið sem geymir video-ið
  */
  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  /**
  * actionListener bætt á þá takka sem framkvæma aðgerðir fyrir videoið
  */
  function takkarSettir() {
    var back = document.querySelector('.button__controls--back');
    back.addEventListener('click', function () {
      if (video.currentTime <= 3) {
        video.currentTime = 0;
      } else {
        video.currentTime -= 3;
      }
    });

    var play = document.querySelector('.button__controls--play');
    play.addEventListener('click', function () {
      if (video.paused === true) {
        video.play();
        var takki = document.querySelector('.button__controls--play');
        takki.classList.remove('button__controls--play');
        takki.classList.add('button__controls--pause');
        // Taka overlay
        var overTakki = document.querySelector('.play__overplay');
        overTakki.classList.remove('play__overplay');
        var divTakki = document.querySelector('.play__midja');
        divTakki.classList.remove('play__midja');
        divTakki.classList.add('play__eydaPlay');
        var yfirDivTakki = document.querySelector('.play__takki');
        yfirDivTakki.classList.remove('play__takki');
        yfirDivTakki.classList.add('play__takki__eftir');
      } else {
        video.pause();
        var _takki = document.querySelector('.button__controls--pause');
        _takki.classList.remove('button__controls--pause');
        _takki.classList.add('button__controls--play');
        // Setja overlay
        var _overTakki = document.querySelector('.play__eydaPlay');
        _overTakki.classList.remove('play__eydaPlay');
        _overTakki.classList.add('play__midja');
        var takkatakki = document.querySelector('button');
        takkatakki.classList.add('play__overplay');
        var divYfir = document.querySelector('.play__takki__eftir');
        divYfir.classList.remove('play__takki__eftir');
        divYfir.classList.add('play__takki');
      }
    });

    var mute = document.querySelector('.button__controls--mute');
    mute.addEventListener('click', function () {
      if (video.muted === false) {
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

    var full = document.querySelector('.button__controls--fullscreen');
    full.addEventListener('click', function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    });

    var forward = document.querySelector('.button__controls--forward');
    forward.addEventListener('click', function () {
      if (video.duration - video.currentTime <= 3) {
        video.currentTime = video.duration;
      } else {
        video.currentTime += 3;
      }
    });
  }

  /**
  * Búum til hlutinn sem á að geyma videoið og titilinn
  */
  function create(numer) {
    var myndband = numer.video;
    empty(spilari);
    var container = document.createElement('div');
    spilari.appendChild(container);
    var titill = document.createElement('h1');
    titill.innerText = numer.title;
    container.appendChild(titill);
    titill.classList.add('text__videoHeader');
    container.classList.add('container__video');
    video = document.createElement('video');
    video.src = myndband;
    video.classList.add('container__myndband');
    /* erum að búa til overlay */
    var overlayTakki = document.createElement('button');
    var divTakki = document.createElement('div');
    divTakki.appendChild(overlayTakki);
    var yfirDiv = document.createElement('div');
    overlayTakki.classList.add('play__overplay');
    divTakki.classList.add('play__midja');
    yfirDiv.classList.add('play__takki');
    yfirDiv.addEventListener('click', function () {
      if (video.paused === true) {
        video.play();
        var takki = document.querySelector('.button__controls--play');
        takki.classList.remove('button__controls--play');
        takki.classList.add('button__controls--pause');
        // Setja overlay á
        overlayTakki.classList.remove('play__overplay');
        divTakki.classList.remove('play__midja');
        divTakki.classList.add('play__eydaPlay');
        yfirDiv.classList.remove('play__takki');
        yfirDiv.classList.add('play__takki__eftir');
      } else {
        video.pause();
        var _takki3 = document.querySelector('.button__controls--pause');
        _takki3.classList.remove('button__controls--pause');
        _takki3.classList.add('button__controls--play');
        // Taka af overlay
        overlayTakki.classList.add('play__overplay');
        divTakki.classList.remove('play__eydaPlay');
        divTakki.classList.add('play__midja');
        yfirDiv.classList.remove('play__takki__eftir');
        yfirDiv.classList.add('play__takki');
      }
    });
    yfirDiv.appendChild(divTakki);
    yfirDiv.appendChild(video);
    container.appendChild(yfirDiv);
    video.pause();
    takkarSettir();
    video.addEventListener('ended', function () {
      var takki = document.querySelector('.button__controls--pause');
      takki.classList.remove('button__controls--pause');
      takki.classList.add('button__controls--play');
      // Setja overlay
      var overTakki = document.querySelector('.play__eydaPlay');
      overTakki.classList.remove('play__eydaPlay');
      overTakki.classList.add('play__midja');
      var takkatakki = document.querySelector('button');
      takkatakki.classList.add('play__overplay');
      var divYfir = document.querySelector('.play__takki__eftir');
      divYfir.classList.remove('play__takki__eftir');
      divYfir.classList.add('play__takki');
    }, false);
  }

  /**
  * Sækir upplýsingar um hvaða myndband á að opna
  */
  function open() {
    var request = new XMLHttpRequest();
    var qs = new URLSearchParams(window.location.search);
    var id = qs.get('id');
    var gildi = id.substring(2, 3);
    var tala = parseFloat(gildi);

    var back = document.querySelector('.back');
    back.classList.add('text__back');

    back.addEventListener('click', function () {
      window.location = 'https://notendur.hi.is/alm20/vefforritun/stortverkefni2/';
      empty(spilari);
    });

    request.open('GET', API, true);
    request.onload = function () {
      /* ef id er til þá birtum við myndbandið, annars birtum við villuskilaboð */
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);
        var numer = data.videos[tala - 1];
        if (numer) {
          create(numer);
        } else {
          empty(spilari);
          var container = document.createElement('div');
          spilari.appendChild(container);
          var titill = document.createElement('h1');
          titill.innerText = 'Ekki fannst neitt myndband';
          container.appendChild(titill);
          titill.classList.add('text__videoHeader');
          container.classList.add('container__video');
          var takkaBox = document.querySelector('.button__container');
          takkaBox.classList.add('button__hidden');
        }
      }
    };
    request.send();
  }

  function init() {
    spilari = document.querySelector('.player__container');
    open();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var player = document.querySelector('.player');
    program.init(player);
  });
  return {
    init: init
  };
}();

//# sourceMappingURL=script1-compiled.js.map