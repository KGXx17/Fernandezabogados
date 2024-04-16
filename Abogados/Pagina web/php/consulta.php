<?php
include 'conexion.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$fecha_y_hora = $_POST['fecha_y_hora']; // Asegúrate de que 'fecha_y_hora' coincida con el nombre de tu campo en el formulario

// Formatear la fecha y hora para que coincida con el formato esperado por MySQL
$fecha_y_hora_mysql = date("Y-m-d H:i:s", strtotime($fecha_y_hora));

$sql = "INSERT INTO consultas_datos (nombre, email, asunto, mensaje, fecha_y_hora) 
        VALUES ('$nombre', '$email', '$asunto', '$mensaje', '$fecha_y_hora_mysql')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
