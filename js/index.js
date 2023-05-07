const btnHamburger = document.querySelector('#btn-hamburger');
const btnClose = document.querySelector('#btn-close')
const lista = document.querySelector('#lista-links');

btnHamburger.addEventListener('click',(e) => {
        lista.classList.add('navAtiva');
        document.body.style.overflowY = 'hidden';
    
});


btnClose.addEventListener('click',(e) => {
    lista.classList = '';
    document.body.style.overflowY = 'auto';
});