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

/*/Seleccionar la tabla
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
*/

const datosProfesionales = [];

function initializePagination() {
  $('#tbDatosprofe').pagination({
    dataSource: datosProfesionales,
    pageSize: 2,
    showPageNumbers: true,
    showNavigator: true,
    formatNavigator: '<br><span> Página <%= currentPage %> de <%= totalPage %> </span>',
    callback: function (data, pagination) {
      var $table = $('#tbDatosprofe').find('tbody');
      $table.empty();
      for (var i = 0; i < data.length; i++) {
        $table.append(
          '<tr><td>' + data[i].formacionProf +
          '</td><td>' + data[i].universidad +
          '</td><td>' + data[i].fechaInicio +
          '</td><td>' + data[i].gradoObtenido +
          '</td><td>' + data[i].pais +
          '</td><td>' + data[i].especialidad +
          '</td><td>' + data[i].fechaFinal +
          '</td><td>' + data[i].documentoSustentatorio +
          '</td><td>' + data[i].observacion + '</td></tr>');
      }
    },
  });
};

// Función para guardar datos
function guardarDatos() {
  const formacionProf = document.getElementById("formacionProf").value;
  const universidad = document.getElementById("universidad").value;
  const fechaInicio = document.getElementById("fechaInicio").value;
  const gradoObtenido = document.getElementById("gradoObtenido").value;
  const pais = document.getElementById("pais").value;
  const especialidad = document.getElementById("especialidad").value;
  const fechaFinal = document.getElementById("fechaFinal").value;
  const documentoSustentatorio = document.getElementById("documentoSustentatorio").value;
  const observacion = document.getElementById("observacion").value;

  const formDatospro = document.getElementById("formProfesional");
  const tablaBody = document.getElementById("tbodyDatosprofe");

  const fila = document.createElement("tr");

  fila.innerHTML = `
        <td>${formacionProf}</td>
        <td>${universidad}</td>
        <td>${fechaInicio}</td>
        <td>${gradoObtenido}</td>
        <td>${pais}</td>
        <td>${especialidad}</td>
        <td>${fechaFinal}</td>
        <td>${documentoSustentatorio}</td>
        <td>${observacion}</td>
      `;

  const datos = {
    formacionProf,
    universidad,
    fechaInicio,
    gradoObtenido,
    pais,
    especialidad,
    fechaFinal,
    documentoSustentatorio,
    observacion
  };

  tablaBody.appendChild(fila);
  datosProfesionales.push(datos);

  initializePagination();

  formDatospro.reset();
}

initializePagination();


/*fetch('json/datostab.json')
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('datosMeses');
    const tbody = tabla.querySelector('tbody');

    data.forEach(item => {
      // Obtén la fecha del objeto y extrae el mes
      const fecha = new Date(item.fecha);
      const mes = fecha.toLocaleString('default', { month: 'long' });

      // Crea una nueva fila en la tabla con los datos
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${item.semestre}</td>
        <td>${item.fecha}</td>
        <td>${item.curso}</td>
        <td>${item.estado}</td>
        <td>${mes}</td>
      `;

      tbody.appendChild(fila);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });*/

//Domicilio
fetch('json/domicilio.json')
  .then(response => response.json())
  .then(data => {
    const selectDepar = document.getElementById("selectDeparModal");
    const departamentos = data.departamentos;
    departamentos.forEach(depart => {
      const op = document.createElement("option");
      op.value = depart.id;
      op.textContent = depart.nombre;
      selectDepar.appendChild(op);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });

fetch('json/domicilio.json')
  .then(response => response.json())
  .then(data => {
    const selectProvin = document.getElementById("selectProvinModal");
    const provincias = data.provincias;
    provincias.forEach(provin => {
      const op = document.createElement("option");
      op.value = provin.id;
      op.textContent = provin.nombre;
      selectProvin.appendChild(op);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });

fetch('json/domicilio.json')
  .then(response => response.json())
  .then(data => {
    const selectDistri = document.getElementById("selectDisModal");
    const distritos = data.distritos;
    distritos.forEach(distri => {
      const op = document.createElement("option");
      op.value = distri.id;
      op.textContent = distri.nombre;
      selectDistri.appendChild(op);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });



function ocultarDiv(div) {
  div.style.display = "none";
}

function mostrarDiv(div) {
  div.style.display = "block";
}

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

Object.values(divs).forEach(ocultarDiv);

const selectPais = document.getElementById('selectPaisModal');
const selectDepar = document.getElementById('selectDeparModal');
const selectProvin = document.getElementById('selectProvinModal');
const selectDis = document.getElementById('selectDisModal');

selectPais.addEventListener('change', function () {
  if (selectPais.value === 'p') {
    mostrarDiv(divs.divdeparTamentoo);
    ocultarDiv(divs.textArea);
  } else if (selectPais.value === "o") {
    mostrarDiv(divs.textArea);
    ocultarDiv(divs.divdeparTamentoo);
  }
});

selectDepar.addEventListener("change", function () {
  const departID = selectDepar.value;
  if (departID != "") {
    mostrarDiv(divs.divproVincia);
  }
});

selectProvin.addEventListener("change", function() {
  const provinID = selectProvin.value;
  if (provinID != "") {
    mostrarDiv(divs.divDistritoo);
  }
})

selectDis.addEventListener("change", function() {
  const distriID = selectDis.value;
  if (distriID != "") {
    mostrarDiv(divs.divtipoVia);
    mostrarDiv(divs.divtipoInmue);
    mostrarDiv(divs.divtipoZona);
    mostrarDiv(divs.divnombreVia);
    mostrarDiv(divs.divnumeroInmueble);
    mostrarDiv(divs.divnumeroZona);
  }
})















