<?php
    session_start();
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hiyas_flowershop";

    // Create connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Function to generate a unique user ID
    function generateUniqueUserId($mysqli) {
        do {
            $user_id = bin2hex(random_bytes(8)); // Generate a random string of bytes and convert it to hexadecimal
            $stmt = $mysqli->prepare("SELECT user_id FROM customer WHERE user_id = ?");
            $stmt->bind_param("s", $user_id);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows == 0) {
                break;
            }
            $stmt->close();
        } while (true);
        return $user_id;
    }

    // Check for POST request
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['email'], $_POST['username'], $_POST['password'])) {
            // Signup request
            $email = $_POST['email'];
            $username = $_POST['username'];
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $date = date('Y-m-d H:i:s');

            // Check if email is already taken
            $stmt = $conn->prepare("SELECT email FROM customer WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                echo json_encode(["error" => true, "type" => "email", "message" => "Email is already taken. Please choose another one."]);
                $stmt->close();
            } else {
                // Check if username is already taken
                $stmt = $conn->prepare("SELECT username FROM customer WHERE username = ?");
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $result = $stmt->get_result();
                if ($result->num_rows > 0) {
                    echo json_encode(["error" => true, "type" => "username", "message" => "Username is already taken. Please choose another one."]);
                    $stmt->close();
                } else {
                    // If email and username are not taken, proceed with account creation
                    $user_id = generateUniqueUserId($conn);
                    $stmt = $conn->prepare("INSERT INTO customer (user_id, email, username, password, date) VALUES (?, ?, ?, ?, ?)");
                    $stmt->bind_param("sssss", $user_id, $email, $username, $password, $date);
                    if($stmt->execute()) {
                        echo json_encode(["success" => true, "message" => "Sign up successful"]);
                    } else {
                        echo json_encode(["error" => true, "message" => "Error: " . $stmt->error]);
                    }
                    $stmt->close();
                }
            }
        }
        $conn->close();
        exit;
    }
?>
