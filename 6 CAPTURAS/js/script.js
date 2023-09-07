//Llamamos a los elementos del HTML por su id
const botonAbrir = document.getElementById("boton-abrir"); //Botón que abre y cierra el menú lateral
const menuLateral = document.getElementById("menu"); //El menú lateral
const contenedor = document.querySelector(".contenedor"); // Contenedor principal
const header = document.getElementById("header"); //La cabecera de la página

const btnDesplegar = document.getElementById("btn"); //desplegar el submenú
const subMenu = document.getElementById("sub-menu"); //El submenu

//Evento de escucha al botón "botonAbrir" mostrar y ocultar el menú lateral, el contenido y la cabecera
/*
Usamos toggle para que añada y quite "activo"
Esta en nuestro CSS nos sirve para mostrar
  .menu-lateral.activo{
    left: 0;
  }
*/
botonAbrir.addEventListener("click", () => {
  menuLateral.classList.toggle("activo");
  contenedor.classList.toggle("activo");
  header.classList.toggle("activo");
});

//Evento de escucha al botón "btnDesplegar" mostrar y ocultar el submenú
btnDesplegar.addEventListener("click", () => {
  subMenu.classList.toggle("mostrar");
});

//Eventos para el los links del submenu
const linkHorario = document.getElementById("linkHorario");
const contenidoHorario = document.getElementById("contenidoHorario");

const linkAsistencia = document.getElementById("linkAsistencia");
const contenidoAsistencia = document.getElementById("contenidoAsistencia");

const linkDocente = document.getElementById("linkDocente");
const contenidoDocente = document.getElementById("contenidoDocente");

const inicio = document.getElementById("inicio");

function ocultarTodosLosContenidos() {
  contenidoHorario.style.display = "none";
  contenidoAsistencia.style.display = "none";
  contenidoDocente.style.display = "none";
}

linkHorario.addEventListener("click", () => {
  ocultarTodosLosContenidos();
  contenidoHorario.style.display = "block";
  inicio.style.display = "none";
});

linkAsistencia.addEventListener("click", () => {
  ocultarTodosLosContenidos();
  contenidoAsistencia.style.display = "block";
  inicio.style.display = "none";
});

linkDocente.addEventListener("click", () => {
  ocultarTodosLosContenidos();
  contenidoDocente.style.display = "block";
  inicio.style.display = "none";
});

/*Eventos para los meses*/
/*Funcion para mostrar o ocultar contenido por su id*/
function mostrarOcultar(id) {
  var contenido = document.getElementById(id);
  
  /*Verificamos si el elemento esta oculto*/
  if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
  } else {
      contenido.style.display = 'none';
  }
}








