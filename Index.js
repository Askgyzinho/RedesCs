let botaoEl = document.querySelector('#expande-texto');
let atualizacaoEl = document.querySelector('#atualizacao');
let cs16El = document.querySelector('#cs1-6');

let explicacaoCompetivo = 'Atualmente o modo de jogo mais jogado pelos players de CS:GO é o Competivo.';
let explicacaoAtualizacao = 'O jogo está em constantes atualizações, para acompanhar mais de perto, sugiro que entre no site oficial do CS:GO. O site está no créditos e na página onde explica como baixá-lo';
let explicacaoCs = 'Ficou mundialemente famoso entre os anos de 2000 e 2010 nas lan houses com suas versões mais antigas';

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
    BotaoAgoraEl.innerHTML = 'Obs';
  }

}

function expandeAtualizacao (e) {

  let atualizacaoAgoraEl = e.currentTarget;

  atualizacaoAgoraEl.style.cursor = 'help';

  let atualizacaoAtualEl = atualizacaoAgoraEl.parentNode;

  let expandiu = atualizacaoAtualEl.classList.toggle('expandido');

  if (expandiu)
  {
    atualizacaoAgoraEl.innerHTML = explicacaoAtualizacao;
  }
  else
  {
    atualizacaoAgoraEl.innerHTML = 'Obs';
  }
}
function expandeCs (e) {

  let csAgoraEl = e.currentTarget;

  csAgoraEl.style.cursor = 'help';

  let csAtualEl = csAgoraEl.parentNode;

  let expandiu = csAtualEl.classList.toggle('expandido');

  if (expandiu)
  {
    csAgoraEl.innerHTML = explicacaoCs;
  }
  else
  {
    csAgoraEl.innerHTML = 'Obs';
  }
}

atualizacaoEl.addEventListener('mouseout', expandeAtualizacao);
botaoEl.addEventListener('mouseout', expandeTexto);
cs16El.addEventListener('mouseout', expandeCs);
