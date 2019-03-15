<?php
$uname = $_POST['username'];
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

$sql = "SELECT username FROM user WHERE username=? AND password=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $uname, $pwd);
$stmt->execute();
$stmt->bind_result($fetched_username);
$stmt->fetch();

if ($fetched_username) {
    echo "Success";
} else {
    echo "Failure";
}

$stmt->close();
$conn->close();

?>
