<?php
require_once('C:\xampp\phpMyAdmin\vendor\tecnickcom\tcpdf.php'); // Incluye la biblioteca TCPDF

// Verifica si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $servicio = $_POST['servicio'];
    $tipo_identificacion = $_POST['tipo_identificacion'];
    $numero_identificacion = $_POST['numero_identificacion'];
    $notas = $_POST['notas'];
    $precio = $_POST['precio'];
    $paymentMethod = $_POST['paymentMethod'];
    $deliveryMethod = $_POST['deliveryMethod'];

    // Lógica para generar la factura en formato PDF
    $pdf = new TCPDF(); // Crea una instancia de TCPDF
    $pdf->AddPage(); // Agrega una página al PDF
    $pdf->SetFont('helvetica', '', 12); // Establece la fuente y el tamaño del texto
    $pdf->Cell(0, 10, 'Factura', 0, 1); // Agrega un encabezado
    $pdf->Cell(0, 10, 'Nombre: ' . $nombre, 0, 1); // Agrega información del cliente
    $pdf->Cell(0, 10, 'Apellido: ' . $apellido, 0, 1);
    $pdf->Cell(0, 10, 'Teléfono: ' . $telefono, 0, 1);
    $pdf->Cell(0, 10, 'Dirección: ' . $direccion, 0, 1);
    $pdf->Cell(0, 10, 'Servicio: ' . $servicio, 0, 1);
    $pdf->Cell(0, 10, 'Tipo de identificación: ' . $tipo_identificacion, 0, 1);
    $pdf->Cell(0, 10, 'Número de identificación: ' . $numero_identificacion, 0, 1);
    $pdf->Cell(0, 10, 'Notas: ' . $notas, 0, 1);
    $pdf->Cell(0, 10, 'Precio del servicio: ' . $precio, 0, 1);
    $pdf->Cell(0, 10, 'Método de pago: ' . $paymentMethod, 0, 1);
    $pdf->Cell(0, 10, 'Preferencia de entrega: ' . $deliveryMethod, 0, 1);

    // Guarda el PDF en una ubicación específica
    $rutaFactura = 'facturas/' . uniqid() . '.pdf';
    $pdf->Output($rutaFactura, 'F'); // 'F' indica que el PDF se guardará en un archivo en el servidor

    // Devuelve la URL de la factura generada como respuesta
    echo $rutaFactura;
} else {
    // Si no se reciben datos del formulario, redirige a la página de origen o muestra un mensaje de error
    header("Location: formulario.php"); // Cambia "formulario.php" por la ruta de tu página de formulario
    exit;
}
?>
