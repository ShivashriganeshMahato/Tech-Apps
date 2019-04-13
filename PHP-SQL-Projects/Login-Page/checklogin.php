<?php
session_start();

$uname = $_POST['username'];
$pwd = $_POST['password'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username FROM user WHERE username=? AND password=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $uname, $pwd);
$stmt->execute();
$stmt->bind_result($id, $fetched_username);
$stmt->fetch();

if ($fetched_username) {
    $_SESSION['id'] = $id;
    $_SESSION['username'] = $uname;
    header("Location: home.php");
    die();
} else {
    echo "Failure";
}

$stmt->close();
$conn->close();

?>
