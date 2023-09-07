<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if($_SERVER ["REQUEST_METHOD"]=="POST"){
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $edad = $_POST["edad"];
        $nacimiento = $_POST["nacimiento"];
        $genero = $_POST["genero"];
        $correo = $_POST["correo"];

        echo "<h1>Datos Recibidos:</h1>";
        echo "<p><strong>Nombre:</strong> " . $nombre . "</p>";
        echo "<p><strong>Apellido:</strong> " . $apellido . "</p>";
        echo "<p><strong>Apellido:</strong> " . $edad . "</p>";
        echo "<p><strong>Apellido:</strong> " . $nacimiento . "</p>";
        echo "<p><strong>Apellido:</strong> " . $genero . "</p>";
        echo "<p><strong>Apellido:</strong> " . $correo . "</p>";
    }else{
        echo "Datos no enviados";
    }
    ?> 
</body>
</html>