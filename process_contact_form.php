<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "your@email.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $message = "Name: $name\nEmail: $email\n\n$message";
    
    if (mail($to, $subject, $message)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
