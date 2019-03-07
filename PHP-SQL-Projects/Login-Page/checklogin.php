<?php
echo "fopxcjv";
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

$sql = "SELECT * FROM user";
if ($res = $conn->query($sql)) {

  /* Check the number of rows that match the SELECT statement */
  if ($res->fetchColumn() > 0) {
      echo "boom";
  }
  /* No rows matched -- do something else */
  else {
      echo "nope";
  }
}

$res = null;
$conn = null;

?>
