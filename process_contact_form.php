<?php
// Connect to the database
$conn = new mysqli("localhost", "aatum", "jokumuu.", "messages");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["text"];

// Prepare and execute an SQL INSERT statement
$sql = "INSERT INTO messages (name, email, text) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $text);

if ($stmt->execute()) {
    // Message saved successfully
    echo "Message saved!";
} else {
    // Error handling
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
