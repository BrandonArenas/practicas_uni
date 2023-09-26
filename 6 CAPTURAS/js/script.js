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

const selectSemestre = document.getElementById("selectSem");
const divAgosto = document.getElementById("agostoo");
const divJulio = document.getElementById("julioo");
const divJunio = document.getElementById("junioo");
const divMayo = document.getElementById("mayoo");
const divAbril = document.getElementById("abrill");
const divMarzo = document.getElementById("marzoo");
const divFebrero = document.getElementById("febreroo");
const divEnero = document.getElementById("eneroo");

selectSemestre.addEventListener("change", function () {
  const valorSeleccionado = selectSemestre.value;

  divEnero.style.display = "none";
  divFebrero.style.display = "none";
  divMarzo.style.display = "none";
  divAbril.style.display = "none";
  divMayo.style.display = "none";
  divJunio.style.display = "none";
  divJulio.style.display = "none";
  divAgosto.style.display = "none";

  switch (valorSeleccionado) {
    case "1":
      divEnero.style.display = "block";
      divFebrero.style.display = "block";
      divMarzo.style.display = "block";
      break;
    case "2":
      divAbril.style.display = "block";
      divMayo.style.display = "block";
      divJunio.style.display = "block";
      break;
    case "3":
      divJulio.style.display = "block";
      divAgosto.style.display = "block";
      break;
  }
})

//Seleccionar la tabla
const tabla = document.querySelector("#lista-horario tbody");

function cargarUsuarios() {
  fetch('json/datos.json')
    .then(archivo => archivo.json())//Formato 
    .then(datos => {
      //Itera a través de los datos
      datos.forEach(dato => {
        const row = document.createElement('tr');
        row.innerHTML += `
      <td>${dato.hora}</td>
      <td>${dato.lunes}</td>
      <td>${dato.martes}</td>
      <td>${dato.miercoles}</td>
      <td>${dato.jueves}</td>
      <td>${dato.viernes}</td>
      <td>${dato.sabado}</td>
      <td>${dato.domingo}</td>
      `;
        tabla.appendChild(row);

      });
    })
}
//Llamar a la funcion
cargarUsuarios()

//Selecciona todos los elementos
const tablasHora = document.querySelectorAll(".cont-tabla tbody");

function cargarDatos() {
  //Obtener datos desde un archivo JSON
  fetch('json/datostab.json')
    .then(archivo => archivo.json())//Formato 
    .then(datos => {
      //Itera a través de los datos
      datos.forEach(dato => {
        const row = document.createElement('tr');
        row.innerHTML += `
          <td>${dato.dia}</td>
          <td>${dato.curso}</td>
          <td>${dato.horario}</td>
          <td>${dato.marcacion}</td>
          <td>${dato.estado}</td>
        `;
        tablasHora.forEach(tabla => {
          tabla.appendChild(row.cloneNode(true));
        });
      });
    });
}
//Llamar a la funcion
cargarDatos();


//Seleccionar la tabla
const tablaDomi = document.querySelector("#tbDomicilio tbody");

function cargarDatosdomicilio() {
  fetch('json/datosdomi.json')
    .then(archivo => archivo.json())//Formato 
    .then(datos => {
      //Itera a través de los datos
      datos.forEach(dato => {
        const row = document.createElement('tr');
        row.innerHTML += `
      <td>${dato.orden}</td>
      <td>${dato.pais}</td>
      <td>${dato.direccion}</td>
      <td>${dato.departamento}</td>
      <td>${dato.provincia}</td>
      <td>${dato.distrito}</td>
      <td>${dato.tipvia}</td>
      <td>${dato.nomvia}</td>
      <td>${dato.tipo}</td>
      <td>${dato.numinmueble}</td>
      `;
        tablaDomi.appendChild(row);
      });
    })
}
//Llamar a la funcion
cargarDatosdomicilio()

//Seleccionar la tabla
const tablaProfe = document.querySelector("#tbDatosprofe tbody");

function cargarDatosprofesional() {
  fetch('json/datosprofe.json')
    .then(archivo => archivo.json())//Formato 
    .then(datos => {
      //Itera a través de los datos
      datos.forEach(dato => {
        const row = document.createElement('tr');
        row.innerHTML += `
      <td>${dato.orden}</td>
      <td>${dato.formprofesional}</td>
      <td>${dato.pais}</td>
      <td>${dato.universidad}</td>
      <td>${dato.especialidad}</td>
      <td>${dato.fechinicio}</td>
      <td>${dato.fechfinal}</td>
      <td>${dato.gradoobte}</td>
      <td>${dato.docsustenta}</td>
      <td>${dato.Observacion}</td>
      <td>${dato.opciones}</td>
      `;
        tablaProfe.appendChild(row);

      });
    })
}
//Llamar a la funcion
cargarDatosprofesional()












