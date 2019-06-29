let botaoEl = document.querySelector('#expande-texto');
let explicacaoCompetivo = 'Atualmente o modo de jogo mais jogado pelos players de CS:GO é o Competivo.';


function expandeTexto (e) {

  let BotaoAgoraEl = e.currentTarget;

  BotaoAgoraEl.style.cursor = 'help';
  let ParagrafoAtualEl = BotaoAgoraEl.parentNode;

  let expandiu = ParagrafoAtualEl.classList.toggle('expandido');

  if (expandiu)
  {
    BotaoAgoraEl.innerHTML = explicacaoCompetivo;
  }
  else
  {
    BotaoAgoraEl.innerHTML = '?';
  }

}

botaoEl.addEventListener('mouseout', expandeTexto);
