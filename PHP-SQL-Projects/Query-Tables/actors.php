<?php

$servername = "localhost";
$username = "root";
$password = "usbw";
$db = "sakila";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT actor_id, first_name, last_name FROM actor";

$result = $conn->query($query);

echo "<table>";
echo "  <tr>";
echo "      <th>Name</th>";
echo "      <th>Description</th>";
echo "      <th>Release Year</th>";
echo "  </tr>";
while ($row = $result->fetch_assoc()) {
    $filmIDsQuery = "SELECT actor_id, first_name, last_name FROM actor";
    echo "  <tr>";
    echo "      <td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
    echo "  </tr>";
}
echo "</table>";

?>
