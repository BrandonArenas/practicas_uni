//Un arreglo
var datos = [
    {num: 1, nombre: "Brandon", apellido: "Arenas Banda", correo: "brandonarenasbanda@gmail.com"},
    {num: 2, nombre: "Juan", apellido: "Perez Ramirez", correo: "perezramirez@gmail.com"},
    {num: 3, nombre: "Pedro", apellido: "Del Aguila Zapata", correo: "pedrodelaguila@gmail.com"},
];

//Llamamos a la tabla por el id
var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

//Iteración para agregar
for (var i=0; i<datos.length;i++){
    //Crea una nueva fila
    var fila = tabla.insertRow();
     //Creamos celdas
    var celdaNumero = fila.insertCell(0);
    var celdaNombre = fila.insertCell(1);
    var celdaApellido = fila.insertCell(2);
    var celdaCorreo = fila.insertCell(3);

    //Asignanamos los valores a las celdas
    celdaNumero.innerHTML = datos[i].num;
    celdaNombre.innerHTML = datos[i].nombre;
    celdaApellido.innerHTML = datos[i].apellido;
    celdaCorreo.innerHTML = datos[i].correo;
}