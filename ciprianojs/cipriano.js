let show = true;;

const barraNavegacao = document.querySelector('.barra-navegacao');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  barraNavegacao.classList.toggle('on', show);
  show = !show;
})