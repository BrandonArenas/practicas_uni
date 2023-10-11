$(document).ready(function () {
    //Cargar datos del JSON
    $.getJSON('json/data.json', function (data) {
        //Configar paginacion
        $('#pagination').pagination({
            dataSource: data,
            pageSize: 5, //Numero de elementos
            callback: function (data, pagination) {
                //Funcion cambia de pagina
                var html = '';
                $.each(data, function (index, item) {
                    html += '<div>' + item.nombre + '</div>';
                });
                $('#contenedor-datos').html(html);
            }
        });
    })
})

