<?php

session_start();
$userid = $_SESSION['id'];

$uname = $_GET['uname'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id FROM user WHERE username=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $uname);
$stmt->execute();
$stmt->bind_result($id);
$stmt->fetch();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT content FROM tweet WHERE userid=" . $id . " ORDER BY timestamp DESC";
$result = $conn->query($query);

$tweets = array();

while ($row = $result->fetch_assoc()) {
    $tweets[] = array(
        'content' => $row['content']
    );
}

foreach ($tweets as $i => $tweet) {
    $pattern = '/\#([A-Za-z0-9_]+)/i';
    $replacement = '<a href="hashtag.php?tag=$1">#$1</a>';
    $tweets[$i]['content'] = preg_replace($pattern, $replacement, $tweet['content']);
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT id FROM followers WHERE follower_id=" . $userid . " AND followee_id=" . $id;
$result = $conn->query($query);

$is_following = false;

while ($row = $result->fetch_assoc()) {
    $is_following = true;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT COUNT(id) AS count FROM followers WHERE follower_id=" . $id;
$result = $conn->query($sql);

$num_following = -1;

while ($row = $result->fetch_assoc()) {
    $num_following = $row['count'];
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT COUNT(id) AS count FROM followers WHERE followee_id=" . $id;
$result = $conn->query($sql);

$num_followers = -1;

while ($row = $result->fetch_assoc()) {
    $num_followers = $row['count'];
}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title><?php echo $uname; ?></title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>

    <style>
        .card {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 50px;
        }

        .card-body a {
            color: yellow;
        }
    </style>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4"><?php echo $uname ?>'s tweets</h1>
        <p><?php echo $uname; ?> is following <?php echo $num_following; ?> people
            and is followed by <?php echo $num_followers; ?> people</p>
        <?php if (!$is_following && $userid != $id) { ?>
            <a href="follow.php?id=<?php echo $id ?>&uname=<?php echo $uname ?>">Follow</a>
            &nbsp;
        <?php } ?>
        <a href="home.php">Home</a>
    </div>
</div>
<div class="container">
    <div class="row">
        <?php foreach ($tweets as $i => $tweet) { ?>
            <div class="col-4">
                <div class="card text-white bg-info" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $uname ?></h5>
                        <p class="card-text"><?php echo $tweet['content'] ?></p>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</div>
</div>
</body>
</html>
