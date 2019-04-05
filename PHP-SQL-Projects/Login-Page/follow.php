<?php
session_start();

$userid = $_SESSION['id'];
$user_uname = $_SESSION['username'];

$id = $_GET['id'];
$uname = $_GET['uname'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo $userid;
echo '<br>';
echo $user_uname;
echo '<br>';
echo $id;
echo '<br>';
echo $uname;

$sql = "INSERT INTO followers (follower_id, followee_id) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userid, $id);
$stmt->execute();

header("Location: user.php?uname=" . $uname);
die();