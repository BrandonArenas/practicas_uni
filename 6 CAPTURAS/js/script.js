//Llamamos a los elementos del HTML por su id
const botonAbrir = document.getElementById("boton-abrir"); //Botón que abre y cierra el menú lateral
const menuLateral = document.getElementById("menu"); //El menú lateral
const contenedor = document.querySelector(".contenedor"); // Contenedor principal
const header = document.getElementById("header"); //La cabecera de la página
const fondoTransparente = document.getElementById("fondo-transparente");

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
  fondoTransparente.classList.toggle("activo");
});

/*Clic fuera del menu lateral*/
fondoTransparente.addEventListener("click", () => {
  menuLateral.classList.remove("activo");
  contenedor.classList.remove("activo");
  fondoTransparente.classList.remove("activo");
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
const divMeses = {
  enero: document.getElementById("eneroo"),
  febrero: document.getElementById("febreroo"),
  marzo: document.getElementById("marzoo"),
  abril: document.getElementById("abrill"),
  mayo: document.getElementById("mayoo"),
  junio: document.getElementById("junioo"),
  julio: document.getElementById("julioo"),
  agosto: document.getElementById("agostoo"),
};

selectSemestre.addEventListener("change", function () {
  const valorSeleccionado = selectSemestre.value;

  for (const divmeses in divMeses) {
    divMeses[divmeses].style.display = "none";
  }

  switch (valorSeleccionado) {
    case "1":
      for (const divmeses in divMeses) {
        divMeses[divmeses].style.display = "block";
      }
      break;
    case "2":
      divMeses.agosto.style.display = "block";
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

//Paginacion en la tabla
const datosProfesionales = [];//Guardar los datos en un array para la paginacion

//Funcion para la paginacion de la tabla
function initializePagination() {
  $('#tbDatosprofe').pagination({
    dataSource: datosProfesionales,//Datos
    pageSize: 2,
    showPageNumbers: true,//Numero de la pagina
    showNavigator: true,//Navegar en la pagina
    formatNavigator: '<br><span> Página <%= currentPage %> de <%= totalPage %> </span>',
    callback: function (data, pagination) {
      var $table = $('#tbDatosprofe').find('tbody');
      $table.empty();
      for (var i = 0; i < data.length; i++) {
        $table.append(
          '<tr><td>' + data[i].selectedOption1 +
          '</td><td>' + data[i].selectedOption2 +
          '</td><td>' + data[i].universidad +
          '</td><td>' + data[i].especialidad +
          '</td><td>' + data[i].fechaInicio +
          '</td><td>' + data[i].fechaFinal +
          '</td><td>' + data[i].gradoObtenido +
          '</td><td>' + data[i].documentoSustentatorio +
          '</td><td>' + data[i].observacion + '</td></tr>');
      }
    },
  });
};

//Función para guardar datos del formulario
function guardarDatos() {
  const selectProfe = document.getElementById("formacionProf");
  const selectedOption1 = selectProfe.options[selectProfe.selectedIndex].textContent;
  const universidad = document.getElementById("universidad").value;
  const fechaInicio = document.getElementById("fechaInicio").value;
  const gradoObtenido = document.getElementById("gradoObtenido").value;
  const selectPais = document.getElementById("pais");
  const selectedOption2 = selectPais.options[selectPais.selectedIndex].textContent;
  const especialidad = document.getElementById("especialidad").value;
  const fechaFinal = document.getElementById("fechaFinal").value;
  const documentoSustentatorio = document.getElementById("documentoSustentatorio").value;
  const observacion = document.getElementById("observacion").value;

  const formDatospro = document.getElementById("formProfesional");

  const datos = {
    selectedOption1,
    selectedOption2,
    universidad,
    especialidad,
    fechaInicio,
    fechaFinal,
    gradoObtenido,
    especialidad,
    documentoSustentatorio,
    observacion
  };

  datosProfesionales.push(datos);

  //Actualizar panigacion
  initializePagination();

  formDatospro.reset();
}
//Llamar a la funcion
initializePagination();


//Funcion para cargar los datos en los selects
function cargarDatosSelect(urlJSON, idSelect, nomBre) {
  //Solicitud fetch para obtener el JSON
  fetch(urlJSON)
    .then(response => response.json())
    .then(data => {
      const selectOption = document.getElementById(idSelect);
      const opci = data[nomBre];
      opci.forEach(datos => {
        const op = document.createElement("option");
        op.value = datos.id;
        op.textContent = datos.nombre;
        selectOption.appendChild(op);
      });
    })
    .catch(error => {
      console.error('No cargo el JSON:', error);
    });
}

//Llamar a la funcion y agregar los valores
cargarDatosSelect('json/domicilio.json', 'selectDeparModal', 'departamentos');
cargarDatosSelect('json/domicilio.json', 'selectProvinModal', 'provincias');
cargarDatosSelect('json/domicilio.json', 'selectDisModal', 'distritos');

//Agregar domicilio
const divs = {
  divproVincia: document.getElementById("proVincia"),
  divtipoVia: document.getElementById("tipoVia"),
  divtipoInmue: document.getElementById("tipoInmue"),
  divtipoZona: document.getElementById("tipoZona"),
  divdeparTamentoo: document.getElementById("deparTamentoo"),
  divDistritoo: document.getElementById("Distritoo"),
  divnombreVia: document.getElementById("nombreVia"),
  divnumeroInmueble: document.getElementById("numeroInmueble"),
  divnumeroZona: document.getElementById("numeroZona"),
  textArea: document.getElementById("textareaa"),
};

function mostrarDiv(div) {
  div.style.display = "block";
}

function ocultarTodosLosDivs(divs) {
  Object.values(divs).forEach(function (div) {
    div.style.display = "none";
  });
}
ocultarTodosLosDivs(divs)

const selectPais = document.getElementById('selectPaisModal');
const selectDepar = document.getElementById('selectDeparModal');
const selectProvin = document.getElementById('selectProvinModal');
const selectDis = document.getElementById('selectDisModal');

selectPais.addEventListener('change', function () {
  ocultarTodosLosDivs(divs);
  if (selectPais.value === 'p') {
    mostrarDiv(divs.divdeparTamentoo);
  } else if (selectPais.value === "o") {
    mostrarDiv(divs.textArea);
  }
});

selectDepar.addEventListener("change", function () {
  const departID = selectDepar.value;
  if (departID != "") {
    mostrarDiv(divs.divproVincia);
  }
});

selectProvin.addEventListener("change", function () {
  const provinID = selectProvin.value;
  if (provinID != "") {
    mostrarDiv(divs.divDistritoo);
  }
})

selectDis.addEventListener("change", function () {
  const distriID = selectDis.value;
  if (distriID != "") {
    for (const divss in divs) {
      if (divss === "textArea") {
        divs[divss].style.display = "none";
      } else {
        mostrarDiv(divs[divss]);
      }
    }
  }
})

//Mostrar datos en la tabla
const mesesTbody = {
  "01": document.getElementById("eneroMes"),
  "02": document.getElementById("febreroMes"),
  "03": document.getElementById("marzoMes"),
  "04": document.getElementById("abrilMes"),
  "05": document.getElementById("mayoMes"),
  "06": document.getElementById("junioMes"),
  "07": document.getElementById("julioMes"),
  "08": document.getElementById("agostoMes"),
};

fetch('json/datostab.json')
  .then(archivo => archivo.json())
  .then(datos => {
    datos.forEach(dato => {
      const fecha = dato.fecha;
      const mes = fecha.substring(5, 7);

      if (mesesTbody[mes]) {
        const tbody = mesesTbody[mes];
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${dato.fecha}</td>
        <td>${dato.curso}</td>
        <td>${dato.horario}</td>
        <td>${dato.marcacion}</td>
        <td>${dato.estado === 1 ? '<img src="img/presente.png" alt="Presente">'
            : (dato.estado === 2 ? '<img src="img/tardanza.png" alt="Tardanza">'
              : '<img src="img/falta.png" alt="Falta">')}</td>
        `;
        tbody.appendChild(row);
      }
    });
  });




















