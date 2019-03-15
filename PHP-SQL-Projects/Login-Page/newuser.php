<?php

$username = $_POST['username'];
$pwd = $_POST['password'];

$servername = "localhost";
$username = "root";
$password = "usbw";
$dbname = "loginassignment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO user (username, password)
VALUES ("$username", "$password")";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
