var API = './videos.json';

data = JSON.parse(response);
data.videos // til að ná í videos
data.categories[0] // færðu fyrsta stakið í categories fylkinu....
data.categories[0].title // þá færðu titillinn nýleg myndbönd
data.categories[0].videos // þá færðu videos fylkið [1,2,3]

class Videos() {
  contructor() {
    this.videosContainer = document.querySelector('.videos');
    open();
  }
  open() {
    const data = API.parse(response);

    this.nyVideo = this.videoContainer.querySelector('#ny');
    const ny = data.categories[0].videos;
    for each(stk in ny) {
      create(data.videos[stk], this.nyVideo.querySelector('.videos__content'));
    }

    this.kennslaVideo = this.videoContainer.querySelector('#kennsla');
    const kennsla = data.categories[1].videos;
    for each(stk in kennsla) {
      create(data.videos[stk], this.kennslaVideo.querySelector('.videos__content'));
    }

    this.skemmtunVideo = this.videoContainer.querySelector('#skemmtun');
    const skemmtun = data.categories[2].videos;
    for each(stk in skemmtun) {
      create(data.videos[stk], this.skemmtunVideo.querySelector('.videos__content'));
    }

  }
  create(stak, container) {
    const box = document.createElement('div');
    const poster = document.createElement('div');

    const mynd = stak.poster;
    const lengd = stak.duration;
    const titill = stak.title;
    const sidan = sidan(stak.created);

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
*/
  sidan(buinTil){

  }

}
class Player() {
  constructor() {
    this.playerContainer = document.querySelector('.player');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const player = new Player();
  const video = new Videos();
});


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
