<?php

session_start();
$id = $_SESSION['id'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT user.id, user.username FROM followers JOIN user ON user.id=followers.followee_id WHERE follower_id=" . $id;
$result = $conn->query($sql);

$users = array();

while ($row = $result->fetch_assoc()) {
    $users[] = array(
        'username' => $row['username'],
        'id' => $row['id']
    );
}

$conn->close();

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Following</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <style>
        .card {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 50px;
        }
        .card-body p a {
            color: yellow;
        }
        .card-body h5 a {
            color: white;
        }
    </style>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Who are you following?</h1>
        <a href="home.php">Home</a>
    </div>
</div>
<div class="container">
    <div class="row">
        <?php foreach ($users as $i => $user) { ?>
            <div class="col-4">
                <div class="card text-white bg-info" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><a href="user.php?uname=<?php echo $user['username'] ?>"><?php echo $user['username'] ?></a></h5>
                        <p class="card-title"><a href="unfollow.php?id=<?php echo $user['id'] ?>">Unfollow</a></p>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</div>
</body>
</html>
