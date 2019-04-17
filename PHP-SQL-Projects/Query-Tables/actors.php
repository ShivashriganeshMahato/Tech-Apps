<?php

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT actor.first_name, actor.last_name, film.title FROM actor JOIN film_actor ON film_actor.actor_id=actor.actor_id JOIN film ON film.film_id=film_actor.film_id WHERE 1";

$result = $conn->query($query);

echo "<table>";
echo "  <tr>";
echo "      <th>Actor</th>";
echo "      <th>Film</th>";
echo "  </tr>";
while ($row = $result->fetch_assoc()) {
    echo "  <tr>";
    echo "      <td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
    echo "      <td>" . $row['title'] . "</td>";
    echo "  </tr>";
}
echo "  <tr>";
echo "      <td>Mr. May</td>";
echo "      <td>The Great Escape</td>";
echo "  </tr>";
echo "</table>";

?>
