<?php
session_start();

$userid = $_SESSION['id'];

$id = $_GET['id'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM followers WHERE followers.follower_id=" . $userid . " AND followers.followee_id=" . $id;
echo $sql;
$stmt = $conn->prepare($sql);
$stmt->execute();

header("Location: following.php");
die();