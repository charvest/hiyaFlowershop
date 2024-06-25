<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hiyas_flowershop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$product_id = $_POST['product_id'];
$product_title = $_POST['product_title'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO Products (product_id, product_title, price, quantity) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssdi", $product_id, $product_title, $price, $quantity);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
