<?php
session_start();
header('Content-Type: application/json');

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

// Check if email and password are set
if (isset($_POST['signInEmail'], $_POST['signInPassword'])) {
    $email = $_POST['signInEmail'];
    $password = $_POST['signInPassword'];

    // Prepare and bind
    $stmt = $conn->prepare("SELECT email, password FROM employee WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        echo json_encode(["error" => true, "type" => "email", "message" => "No user found with that email address."]);
    } else {
        $row = $result->fetch_assoc();
        if (!password_verify($password, $row['password'])) {
            echo json_encode(["error" => true, "type" => "password", "message" => "Wrong password. Please try again."]);
        } else {
            // Assuming login success, set up session or other logic here
            $_SESSION['user_email'] = $email;
            echo json_encode(["success" => true, "message" => "Login successful."]);
        }
    }
    $stmt->close();
} else {
    echo json_encode(["error" => true, "message" => "Required fields are missing."]);
}

$conn->close();
?>