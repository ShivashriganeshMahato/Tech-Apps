<?php

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT title, description, release_year FROM film";

$result = $conn->query($query);

echo "<table>";
echo "  <tr>";
echo "      <th>Name</th>";
echo "      <th>Description</th>";
echo "      <th>Release Year</th>";
echo "  </tr>";
while ($row = $result->fetch_assoc()) {
   echo "  <tr>";
   echo "      <td>" . $row['title'] . "</td>";
   echo "      <td>" . $row['description'] . "</td>";
   echo "      <td>" . $row['release_year'] . "</td>";
   echo "  </tr>";
}
echo "</table>";

// $query = "SELECT * FROM film";
//
// $result = $conn->query($query);
//
// echo "<table>";
// echo "  <tr>";
// echo "      <th>Name</th>";
// echo "      <th>Description</th>";
// echo "      <th>Release Year</th>";
// echo "  </tr>";
// while ($row = $result->fetch_assoc()) {
//     echo "  <tr>";
// //    echo "      <td>" . $row['title'] . "</td>";
// //    echo "      <td>" . $row['description'] . "</td>";
// //    echo "      <td>" . $row['release_year'] . "</td>";
//     echo "  </tr>";
// }
// echo "</table>";

?>
