'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var API = './videos.json';
var program = function program1() {
  var i = void 0;
  var sidan = void 0;

  function element(name, child) {
    var el = document.createElement(name);

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      el.appendChild(child);
    }
    return el;
  }
  function buidTil(runa) {
    var dagur = new Date(runa);
    var munur = new Date().getTime() - dagur;
    var d = Math.floor(munur / 1000 / (60 * 60 * 24));
    if (d > 365) {
      var y = Math.floor(d / 365);
      if (y === 1) {
        return 'Fyrir 1 ári síðan';
      }
      return 'Fyrir ' + y + ' \xE1rum s\xED\xF0an';
    }
    if (d > 30) {
      var m = Math.floor(d / 30);
      if (m === 1) {
        return 'Fyrir 1 mánuði síðan';
      }
      return 'Fyrir ' + m + ' m\xE1nu\xF0um s\xED\xF0an';
    }
    if (d > 7) {
      var v = Math.floor(d / 7);
      if (v === 1) {
        return 'Fyrir 1 viku síðan';
      }
      return 'Fyrir ' + v + ' vikum s\xED\xF0an';
    }
    if (d > 0) {
      if (d === 1) {
        return 'Fyrir 1 degi síðan';
      }
      return 'Fyrir ' + d + ' \xE1rum s\xED\xF0an';
    }
    var k = Math.floor(munur / 1000 / (60 * 60));
    if (k > 1 || k === 0) {
      return 'Fyrir ' + k + ' klukkustundum s\xED\xF0an';
    }
    return 'Fyrir 1 klukkustund síðan';
  }

  function athugaStak(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    var lenSec = seconds.toString().length;
    if (lenSec < 2) {
      seconds = '0' + seconds.toString();
    }
    var skilum = minutes + ':' + seconds;
    return skilum;
  }

  function slod(stak) {
    var numer = stak.id;
    var url = '/video.html?id=$(' + numer + ')';
    return url;
  }

  function create(stak, container) {
    var mynd = document.createElement('img');

    mynd.src = stak.poster;
    var titill = stak.title;

    sidan = buidTil(stak.created);

    var lengd = athugaStak(stak.duration);

    var videoContainer = element('div');
    videoContainer.classList.add('text__container');

    var divElement = element('div');
    divElement.classList.add('text__fyrsta');

    var divTveir = element('div');
    divTveir.classList.add('text__seinna');
    divTveir.appendChild(document.createTextNode(lengd));

    divElement.appendChild(divTveir);
    divElement.appendChild(mynd);

    var ul = element('div');
    ul.appendChild(videoContainer);
    videoContainer.appendChild(divElement);

    var textaBox = element('div');

    var title = ul.appendChild(element('p', titill));
    ul.classList.add('container__content');
    textaBox.appendChild(title);

    var load = ul.appendChild(element('p', sidan));
    textaBox.appendChild(load);

    textaBox.classList.add('container__textContainer');
    ul.appendChild(textaBox);

    ul.addEventListener('click', function () {
      window.location = slod(stak);
    });

    container.classList.add('text__heading');
    container.appendChild(ul);
  }
  function open(videos) {
    var request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function onload1() {
      var data = JSON.parse(request.response);

      var nyVideo = videos.querySelector('#ny');
      nyVideo.classList.add('row__container');
      var ny = data.categories[0].videos;
      for (i = 0; i < ny.length; i += 1) {
        var gildi = ny[i];
        create(data.videos[gildi - 1], nyVideo);
      }

      var kennsluVideo = videos.querySelector('#kennsla');
      kennsluVideo.classList.add('row__container');
      var kennsla = data.categories[1].videos;
      for (i = 0; i < kennsla.length; i += 1) {
        var _gildi = kennsla[i];
        create(data.videos[_gildi - 1], kennsluVideo);
      }

      var skemmtiVideo = videos.querySelector('#skemmtun');
      skemmtiVideo.classList.add('row__container');
      var skemmtun = data.categories[2].videos;
      for (i = 0; i < skemmtun.length; i += 1) {
        var _gildi2 = skemmtun[i];
        create(data.videos[_gildi2 - 1], skemmtiVideo);
      }
    };
    request.send();
  }

  function init(videos) {
    open(videos);
  }
  return {
    init: init
  };
}();
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelector('.videos');

  program.init(videos);
});

//# sourceMappingURL=script-compiled.js.map