<?php

$name = $_POST['name'];
$description = $_POST['description'];
$release_year = $_POST['release'];
$firstName = $_POST['actor_first_name'];
$lastName = $_POST['actor_last_name'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO film (title, description, release_year, language_id) VALUES (?, ?, ?, 1)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $description, $release_year);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$filmID = $conn->insert_id;

$conn->close();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT actor_id FROM actor WHERE first_name='" . $firstName . "' AND last_name='" . $lastName . "'";
echo $sql;
$result = $conn->query($sql);

$actor_id = -1;

while ($row = $result->fetch_assoc()) {
    $actor_id = $row['actor_id'];
}

$conn->close();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO film_actor (actor_id, film_id) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $actor_id, $filmID);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

header("Location: films.php");
die();

?>
