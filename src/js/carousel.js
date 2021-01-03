import Siema from 'siema';

const siema = new Siema();

const prevBtnRef = document.querySelector('.js-prev');
const nextBtnRef = document.querySelector('.js-next');

prevBtnRef.addEventListener('click', () => siema.prev());
nextBtnRef.addEventListener('click', () => siema.next());
