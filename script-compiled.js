'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var API = './videos.json';

document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelector('.videos');

  program.init(videos);
});

var program = function () {

  function open(videos) {
    var request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function () {
      var data = JSON.parse(request.response);

      var nyVideo = videos.querySelector('#ny');
      nyVideo.classList.add('row__container');
      var ny = data.categories[0].videos;

      for (var i = 0; i < ny.length; i++) {
        var gildi = ny[i];
        create(data.videos[gildi - 1], nyVideo);
      }

      var kennsluVideo = videos.querySelector('#kennsla');
      kennsluVideo.classList.add('row__container');
      var kennsla = data.categories[1].videos;
      for (var i = 0; i < kennsla.length; i++) {
        var gildi = kennsla[i];
        create(data.videos[gildi - 1], kennsluVideo);
      }

      var skemmtiVideo = videos.querySelector('#skemmtun');
      skemmtiVideo.classList.add('row__container');
      var skemmtun = data.categories[2].videos;
      for (var i = 0; i < skemmtun.length; i++) {
        var gildi = skemmtun[i];
        console.log(gildi);
        console.log(data.videos[gildi - 1]);
        create(data.videos[gildi - 1], skemmtiVideo);
      }
    };
    request.send();
  }

  function element(name, child) {
    var el = document.createElement(name);

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      el.appendChild(child);
    }

    return el;
  }

  function create(stak, container) {
    //console.log(stak);
    /*var box = document.createElement('div');
    var poster = document.createElement('div');*/
    var mynd = document.createElement('img');
    var lengd = document.createElement('span');
    lengd.innerText = stak.duration;

    mynd.appendChild(lengd);

    mynd.src = stak.poster;
    //var lengd = stak.duration;
    var titill = stak.title;

    //  var sidan = sidan(stak.created);
    var sidan = stak.created;

    var ul = element('dl');
    ul.appendChild(mynd);

    //  ul.appendChild(element('dd', lengd));
    ul.appendChild(element('dd', titill));
    ul.classList.add('row__content');

    ul.appendChild(element('dd', sidan));

    container.classList.add('text__heading');
    container.appendChild(ul);

    //container.appendChild(element(mynd));


    /*  poster.appendChild(mynd);
      poster.appendChild(lengd);
       box.appendChild(poster);
       box.appendChild(titill);
      box.appendChild(sidan);*/
  }
  function init(videos) {
    open(videos);
  }
  return {
    init: init
  };
}();
/*
data = JSON.parse(response);
data.videos // til að ná í videos
data.categories[0] // færðu fyrsta stakið í categories fylkinu....
data.categories[0].title // þá færðu titillinn nýleg myndbönd
data.categories[0].videos // þá færðu videos fylkið [1,2,3]*/
/*
class Videos {
  contructor() {
    this.videosContainer = document.querySelector('.videos');
    open();
  }
  var program = (function() {
    function open() {
      var request = new XMLHttpRequest();

      request.open('GET', API, true);
      request.onload = function() {
        var data = JSON.parse(request.response);

        this.nyVideo = this.videoContainer.querySelector('#ny');
        var ny = data.categories[0].videos;
        /*for each(stk in ny) {
          create(data.videos[stk], this.nyVideo.querySelector('.videos__content'));
        }*/ /*
            for (stk in ny) {
            create(data.videos[stk], this.nyVideo.querySelector('.videos__content'));
            }
            this.kennslaVideo = this.videoContainer.querySelector('#kennsla');
            var kennsla = data.categories[1].videos;
            /*for each(stk in kennsla) {
            create(data.videos[stk], this.kennslaVideo.querySelector('.videos__content'));
            }*/ /*
                for (stk in kennsla) {
                create(data.videos[stk], this.nyVideo.querySelector('.videos__content'));
                }
                this.skemmtunVideo = this.videoContainer.querySelector('#skemmtun');
                var skemmtun = data.categories[2].videos;
                /*for each(stk in skemmtun) {
                create(data.videos[stk], this.skemmtunVideo.querySelector('.videos__content'));
                }*/ /*
                    for (stk in skemmtun) {
                    create(data.videos[stk], this.nyVideo.querySelector('.videos__content'));
                    }
                    };
                    }
                    function create(stak, container) {
                    var box = document.createElement('div');
                    var poster = document.createElement('div');
                    var mynd = stak.poster;
                    var lengd = stak.duration;
                    var titill = stak.title;
                    var sidan = sidan(stak.created);
                    poster.appendChild(mynd);
                    poster.appendChild(lengd);
                    box.appendChild(poster);
                    box.appendChild(titill);
                    box.appendChild(sidan);
                    }
                    /*
                    * Fall sem tekur inn talnarunu sem segir til um hvenær myndband var bætt við.
                    * Skilar tíma frá því að myndbandi var bætt við.
                    * Magga gerir
                    */ /*
                       function sidan(buinTil){
                        }
                       })();
                       }
                       class Player {
                       constructor() {
                       this.playerContainer = document.querySelector('.player');
                       }
                       }
                       document.addEventListener('DOMContentLoaded', () => {
                       const player = new Player();
                       const video = new Videos();
                       });*/

/*var program = (function() {
function open(gildi) {
  var data = API.parse(gildi)
}
function index_init () {
  document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelection('.videos');

    open(video);
  });
}

function video_init() {
  document.addEventListener('DOMContentLoaded', function() {
    var player = document.querySelection('.player');
  });
}
})();*/

//# sourceMappingURL=script-compiled.js.map