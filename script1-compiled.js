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

  function open(id) {
    var request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function () {
      var data = JSON.parse(request.response);

      var numer = data.videos[id];
      video = numer.video;

      create(numer, spilari);
    };
    request.send();
  }
  function create(numer) {
    empty(spilari);
    var container = document.createElement('div');
    var titill = numer.title;
    spilari.appendChild(container);
    container.appendChild(document.createTextNode(titill));
    container.classList.add('text__heading');
    var myndband = document.getElementById("spilun");
    myndband = video;

    var video_play = document.createElement('video');
    video_play.src = myndband;

    container.appendChild(video_play);
    var play = document.querySelector('.playPause');
    play.addEventListener('click', function () {
      playTakki();
    });
    //video.play();

    var back = document.querySelector('.back');

    back.classList.add('text__heading');
    back.addEventListener('click', function () {
      window.location.href = index.html;
      empty(spilari);
    });
  }
  function playTakki() {
    if (video.paused == false) {
      video.pause();
      //Skipta um mynd
    } else {
      video.play();
      //Skipta um mynd
    }
  }

  function muteTakki() {
    if (video.muted == false) {
      video.muted = true;
      //Skipta um mynd
    } else {
      video.muted = false;
      //Skipta um mynd
    }
  }
  /*
  function fullScreenTakki(){
    video.requestFullscreen(); // ekki allveg komið
  }
  */

  function spolaTilbaka() {
    if (video.currenttime <= 3) {
      video.currenttime = 0;
    } else {
      video.currenttime -= 3;
    }
  }

  function spolaAfram() {
    if (video.duration - video.currenttime <= 3) {
      video.currenttime = video.duration;
    } else {
      video.currenttime += video.currenttime;
    }
  }

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  function init(player) {
    var id = 1;
    spilari = document.querySelector('.player__container');
    open(id);
  }
  return {
    init: init
  };
}();

//# sourceMappingURL=script1-compiled.js.map