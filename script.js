const API = './videos.json';

document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelector('.videos');

  program.init(videos);
});

const program = (function() {

  function open(videos) {
    const request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function() {
      const data = JSON.parse(request.response);

      const nyVideo = videos.querySelector('#ny');
      nyVideo.classList.add('row__container');
      const ny = data.categories[0].videos;

      for(var i = 0; i < ny.length; i++) {
        const gildi = ny[i];
        create(data.videos[gildi-1], nyVideo);
      }

      const kennsluVideo = videos.querySelector('#kennsla');
      kennsluVideo.classList.add('row__container');
      const kennsla = data.categories[1].videos;
      for(var i = 0; i < kennsla.length; i++) {
        const gildi = kennsla[i];
        create(data.videos[gildi-1], kennsluVideo);
      }

      const skemmtiVideo = videos.querySelector('#skemmtun');
      skemmtiVideo.classList.add('row__container');
      const skemmtun = data.categories[2].videos;
      for(var i = 0; i < skemmtun.length; i++) {
        const gildi = skemmtun[i];
        create(data.videos[gildi-1], skemmtiVideo);
      }

    };
    request.send();
  }

  function element(name, child) {
    const el = document.createElement(name);

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (typeof child === 'object') {
      el.appendChild(child)
    }

    return el;
  }

  function create(stak, container) {
    const numer = stak.id;
    const mynd = document.createElement('img');
    const lengd = document.createElement('span');
    lengd.innerText = stak.duration;

    mynd.appendChild(lengd);

    mynd.src = stak.poster;
    const titill = stak.title;

    var sidan = buidTil(stak.created);


    const ul = element('dl');
    ul.appendChild(mynd);

    ul.appendChild(element('dd', titill));
    ul.classList.add('row__content');

    ul.appendChild(element('dd', sidan));
    console.log(ul);

    ul.addEventListener('click', () => {
      window.location.href = numer;

    });

    container.classList.add('text__heading');
    container.appendChild(ul);
  }

  function buidTil(runa){
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
