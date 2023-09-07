//Obtenemos elementos del DOM
//Buscarmos el elemento por el ID
const abrirModal = document.getElementById("abrir-modal");
const cerrarModal = document.getElementById("cerrar-modal");
const miModal = document.getElementById("miModal");

//Abrir el modal cuando hagamos clic en el boton
abrirModal.addEventListener("click",()=>{
    miModal.style.display = "block";//Esto nos ayuda a mostrar de nuevo el modal en el css pusimos display: none eso lo oculta ahora con block se muestra
})
//Cerrar el modal
cerrarModal.addEventListener("click",()=>{
    miModal.style.display = "none";//Esto ahora lo cierra cambia el display block a none
})
//Cerrar el modal cuando hagamos clic fuera
window.addEventListener("click", (event) => {
    if (event.target === miModal) {
        miModal.style.display = "none";
    }
});
