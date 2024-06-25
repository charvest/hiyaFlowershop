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

$sql = "SELECT product_title, price FROM products";
$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode($products);
} else {
    echo json_encode([]);
}

$conn->close();
?>
