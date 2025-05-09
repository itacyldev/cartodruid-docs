document.addEventListener('DOMContentLoaded', function () {
    var logoLink = document.querySelector('.md-logo');
    if (logoLink) {
        logoLink.href = 'http://www.cartodruid.es';
    }
});

window.onscroll = function () {
    // Cambia el título al hacer scroll
    document.querySelector('.md-header__title').innerText = document.querySelector('.md-header__topic span').innerText;
};

