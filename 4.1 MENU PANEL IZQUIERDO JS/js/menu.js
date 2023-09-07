/**
 * Nos ayuda a mostrar nuestros menu
 */
const boton = document.querySelector('.boton');

/*Se añade un evento al hacer click*/
boton.addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
});
