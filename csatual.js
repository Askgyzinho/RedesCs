let botaoEl = document.querySelector('#passagem');
let explicacaoPassagem = 'Vale citar que durante essas mudanças de line-up, vários jogadores entraram e saíram. Até gringo nos representou.';


function expandeTexto (e) {

  let BotaoAgoraEl = e.currentTarget;

  BotaoAgoraEl.style.cursor = 'help';
  BotaoAgoraEl.style.cursor = '10px';
  let ParagrafoAtualEl = BotaoAgoraEl.parentNode;

  let expandiu = ParagrafoAtualEl.classList.toggle('expandido');

  if (expandiu)
  {
    BotaoAgoraEl.innerHTML = explicacaoPassagem;
  }
  else
  {
    BotaoAgoraEl.innerHTML = '?';
  }

}

botaoEl.addEventListener('mouseout', expandeTexto);
