<?php
include 'conexion.php';

$nombre = $conn->real_escape_string($_POST['nombre']);
$email = $conn->real_escape_string($_POST['email']);
$asunto = $conn->real_escape_string($_POST['asunto']);
$mensaje = $conn->real_escape_string($_POST['mensaje']);
$numero = $conn->real_escape_string($_POST['numero']);  

$sql = "INSERT INTO formulario_contacto (nombre, email, asunto, mensaje, numero) VALUES ('$nombre', '$email', '$asunto', '$mensaje', '$numero')";

if ($conn->query($sql) === TRUE) {
    $response = array("success" => true, "message" => "Datos insertados correctamente");
} else {
    $response = array("success" => false, "message" => "Error al insertar datos: " . $conn->error);
}

// Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
