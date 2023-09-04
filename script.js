let hamburguer = document.getElementById('hamburguer');
let itensMenu = document.querySelector('.header-nav ul');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    itensMenu.classList.toggle('show');
}