var API = './videos.json';

document.addEventListener('DOMContentLoaded', function() {
  var videos = document.querySelector('.videos');

  program.init(videos);
});

var program = (function() {

  function open(videos) {
    var request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function() {
      var data = JSON.parse(request.response);

      var nyVideo = videos.querySelector('#ny');
      nyVideo.classList.add('row__container');
      var ny = data.categories[0].videos;

      for(var i = 0; i < ny.length; i++) {
        var gildi = ny[i];
        create(data.videos[gildi-1], nyVideo);
      }

      var kennsluVideo = videos.querySelector('#kennsla');
      kennsluVideo.classList.add('row__container');
      var kennsla = data.categories[1].videos;
      for(var i = 0; i < kennsla.length; i++) {
        var gildi = kennsla[i];
        create(data.videos[gildi-1], kennsluVideo);
      }

      var skemmtiVideo = videos.querySelector('#skemmtun');
      skemmtiVideo.classList.add('row__container');
      var skemmtun = data.categories[2].videos;
      for(var i = 0; i < skemmtun.length; i++) {
        var gildi = skemmtun[i];
        console.log(gildi);
        console.log(data.videos[gildi-1]);
        create(data.videos[gildi-1], skemmtiVideo);
      }

    };
    request.send();
  }

  function element(name, child) {
    var el = document.createElement(name);

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (typeof child === 'object') {
      el.appendChild(child)
    }

    return el;
  }

  function create(stak, container) {
    var mynd = document.createElement('img');
    var lengd = document.createElement('span');
    lengd.innerText = stak.duration;

    mynd.appendChild(lengd);

    mynd.src = stak.poster;
    var titill = stak.title;

    var sidan = sidan(stak.created);


    var ul = element('dl');
    ul.appendChild(mynd);

    ul.appendChild(element('dd', titill));
    ul.classList.add('row__content');

    ul.appendChild(element('dd', sidan));

    container.classList.add('text__heading');
    container.appendChild(ul);
  }

  function sidan(runa){
    const dagur = new Date(runa);
    const munur = new Date().getTime() - dagur;
    const d = Math.floor((munur/1000) / (60 * 60 * 24));
    if(d > 365){
      const y = Math.floor(d/365);
      if(y === 1){
        return 'Fyrir 1 ári síðan';
      }else {
        return 'Fyrir ' + y + ' árum síðan';
      }
    }
    if(d > 30){
      const m = Math.floor(d/30);
      if(m === 1){
        return 'Fyrir 1 mánuði síðan';
      }else {
        return 'Fyrir ' + m + ' mánuðum síðan';
      }
    }
    if(d > 7){
      const v = Math.floor(d/7);
      if(v === 1){
        return 'Fyrir 1 viku síðan';
      }else {
        return 'Fyrir ' + v + ' vikum síðan';
      }
    }
    if(d > 0){
      if(d === 1){
        return 'Fyrir 1 degi síðan';
      }else {
        return 'Fyrir ' + d + ' vikum síðan';
      }
    }
    const k = Math.floor((munur/1000) / (60 * 60));
    if(k > 1 || k === 0){
      return 'Fyrir ' + k + ' klukkustundum síðan';
    }
    return 'Fyrir 1 klukkustund síðan';
  }

  function init(videos) {
    open(videos);
  }
  return {
    init:init
  }
})();
