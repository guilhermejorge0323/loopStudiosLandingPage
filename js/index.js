













function mudaNavBar(){
    const larguraPagina = document.documentElement.clientWidth;
    const links = document.querySelector('#lista-links');
    const btnHamburger = document.querySelector('#button-hamburger');
    if(larguraPagina <= 912){
        links.classList = 'oculto';
        btnHamburger.classList = '';
    }else{
        links.classList = '';
        btnHamburger.classList = 'oculto';
    }
}