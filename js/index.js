const btnHamburger = document.querySelector('#btn-hamburger');
const btnClose = document.querySelector('#btn-close')
const lista = document.querySelector('#lista-links');

btnHamburger.addEventListener('click',(e) => {
    if(!lista.classList.contains('navAtiva')){
        lista.classList.add('navAtiva');
    }
});


btnClose.addEventListener('click',(e) => {
    lista.classList = '';
});