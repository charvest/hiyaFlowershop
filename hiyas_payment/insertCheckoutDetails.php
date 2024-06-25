<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hiyas_flowershop";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO paymentcheckout (full_name, email, address, contact, product_name, scheduled_delivery, payment_type, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssd", $full_name, $email, $address, $contact, $product_name, $scheduled_delivery, $payment_type, $total_price);

// Set parameters and execute
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$address = $_POST['address'];
$contact = $_POST['contact'];
$product_name = implode(", ", array_column($_POST['products'], 'name'));
$scheduled_delivery = $_POST['scheduled_delivery'];
$payment_type = $_POST['payment_type'];
$total_price = $_POST['total_price'];

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>
