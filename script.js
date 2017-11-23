const API = './videos.json';
const program = (function program1() {
  let i;
  let sidan;

  function element(name, child) {
    const el = document.createElement(name);

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (typeof child === 'object') {
      el.appendChild(child);
    }
    return el;
  }
  function buidTil(runa) {
    const dagur = new Date(runa);
    const munur = new Date().getTime() - dagur;
    const d = Math.floor((munur / 1000) / (60 * 60 * 24));
    if (d > 365) {
      const y = Math.floor(d / 365);
      if (y === 1) {
        return 'Fyrir 1 ári síðan';
      }
      return `Fyrir ${y} árum síðan`;
    }
    if (d > 30) {
      const m = Math.floor(d / 30);
      if (m === 1) {
        return 'Fyrir 1 mánuði síðan';
      }
      return `Fyrir ${m} mánuðum síðan`;
    }
    if (d > 7) {
      const v = Math.floor(d / 7);
      if (v === 1) {
        return 'Fyrir 1 viku síðan';
      }
      return `Fyrir ${v} vikum síðan`;
    }
    if (d > 0) {
      if (d === 1) {
        return 'Fyrir 1 degi síðan';
      }
      return `Fyrir ${d} árum síðan`;
    }
    const k = Math.floor((munur / 1000) / (60 * 60));
    if (k > 1 || k === 0) {
      return `Fyrir ${k} klukkustundum síðan`;
    }
    return 'Fyrir 1 klukkustund síðan';
  }

  function athugaStak(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    const lenSec = seconds.toString().length;
    if (lenSec < 2) {
      seconds = `0${seconds.toString()}`;
    }
    const skilum = `${minutes}:${seconds}`;
    return skilum;
  }

  function slod(stak) {
    const numer = stak.id;
    const url = `/video.html?id=$(${numer})`;
    return url;
  }

  function create(stak, container) {
    const mynd = document.createElement('img');

    mynd.src = stak.poster;
    const titill = stak.title;

    sidan = buidTil(stak.created);

    const lengd = athugaStak(stak.duration);

    const videoContainer = element('div');
    videoContainer.classList.add('text__container');

    const divElement = element('div');
    divElement.classList.add('text__fyrsta');

    const divTveir = element('div');
    divTveir.classList.add('text__seinna');
    divTveir.appendChild(document.createTextNode(lengd));

    divElement.appendChild(divTveir);
    divElement.appendChild(mynd);


    const ul = element('div');
    ul.appendChild(videoContainer);
    videoContainer.appendChild(divElement);

    const textaBox = element('div');

    const title = ul.appendChild(element('p', titill));
    ul.classList.add('container__content');
    textaBox.appendChild(title);

    const load = ul.appendChild(element('p', sidan));
    textaBox.appendChild(load);

    textaBox.classList.add('container__textContainer');
    ul.appendChild(textaBox);

    ul.addEventListener('click', () => {
      window.location = slod(stak);
    });

    container.classList.add('text__heading');
    container.appendChild(ul);
  }
  function open(videos) {
    const request = new XMLHttpRequest();

    request.open('GET', API, true);
    request.onload = function onload1() {
      const data = JSON.parse(request.response);

      const nyVideo = videos.querySelector('#ny');
      nyVideo.classList.add('row__container');
      const ny = data.categories[0].videos;
      for (i = 0; i < ny.length; i += 1) {
        const gildi = ny[i];
        create(data.videos[gildi - 1], nyVideo);
      }

      const kennsluVideo = videos.querySelector('#kennsla');
      kennsluVideo.classList.add('row__container');
      const kennsla = data.categories[1].videos;
      for (i = 0; i < kennsla.length; i += 1) {
        const gildi = kennsla[i];
        create(data.videos[gildi - 1], kennsluVideo);
      }

      const skemmtiVideo = videos.querySelector('#skemmtun');
      skemmtiVideo.classList.add('row__container');
      const skemmtun = data.categories[2].videos;
      for (i = 0; i < skemmtun.length; i += 1) {
        const gildi = skemmtun[i];
        create(data.videos[gildi - 1], skemmtiVideo);
      }
    };
    request.send();
  }

  function init(videos) {
    open(videos);
  }
  return {
    init,
  };
}());
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelector('.videos');

  program.init(videos);
});
