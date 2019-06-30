let cazaresEl = document.querySelector('#cazares');
let cazaEl = document.querySelector('#caza');
let pachecoEl = document.querySelector('#pachecop');
let pacheEl = document.querySelector('#pacheco');
let seringueiraEl = document.querySelector('#seringueira');
let seringEl = document.querySelector('#seringueiraimg');

cazaresEl.style.cursor = 'pointer';
pachecoEl.style.cursor = 'pointer';
seringueiraEl.style.cursor = 'pointer';

function mostraCazares(e){
  cazaEl.style.display = 'inline-block';

}

function mostraPacheco (e){
  pacheEl.style.display = 'inline-block';

}

function mostraSeringueira (e) {
  seringEl.style.display = 'inline-block';
}

cazaresEl.addEventListener('click', mostraCazares);
pachecoEl.addEventListener('click', mostraPacheco);
seringueiraEl.addEventListener('click', mostraSeringueira);
