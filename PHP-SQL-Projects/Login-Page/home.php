<?php
session_start();

$uname = $_SESSION['username'];
$userid = $_SESSION['id'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT content FROM tweet WHERE userid=" . $userid . " ORDER BY timestamp DESC";
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
$sql = "SELECT COUNT(id) AS count FROM followers WHERE follower_id=" . $userid;
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
$sql = "SELECT COUNT(id) AS count FROM followers WHERE followee_id=" . $userid;
$result = $conn->query($sql);

$num_followers = -1;

while ($row = $result->fetch_assoc()) {
    $num_followers = $row['count'];
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT tweet.content, user.username FROM followers JOIN tweet ON tweet.userid=followers.followee_id JOIN user ON user.id=tweet.userid WHERE followers.follower_id=" . $userid . " ORDER BY tweet.timestamp DESC";
$result = $conn->query($query);

$friend_tweets = array();

while ($row = $result->fetch_assoc()) {
    $friend_tweets[] = array(
        'username' => $row['username'],
        'content' => $row['content']
    );
}

foreach ($friend_tweets as $i => $tweet) {
    $pattern = '/\#([A-Za-z0-9_]+)/i';
    $replacement = '<a href="hashtag.php?tag=$1">#$1</a>';
    $friend_tweets[$i]['content'] = preg_replace($pattern, $replacement, $tweet['content']);
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Home</title>

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
        <h1 class="display-4">Welcome <?php echo $uname; ?>!</h1>
        <p>You are following <?php echo $num_following; ?> people and <?php echo $num_followers; ?> people are following you</p>
        <a href="followers.php">Followers</a>
        <a href="following.php">Following</a>
        <a href="logout.php">Logout</a>
    </div>
</div>
<div class="container">
    <h2>Your tweets</h2>
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
    <br>
    <h2>Your friends' tweets</h2>
    <div class="row">
        <?php foreach ($friend_tweets as $i => $tweet) { ?>
            <div class="col-4">
                <div class="card text-white bg-info" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><a href="user.php?uname=<?php echo $tweet['username'] ?>"><?php echo $tweet['username'] ?></a></h5>
                        <p class="card-text"><?php echo $tweet['content'] ?></p>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
    <br>
    <h2>New tweet</h2>
    <form method="post" action="newpost.php">
        <div class="form-group">
            <label for="exampleInputEmail1">Tweet content</label>
            <textarea maxlength="280" type="text" name="content" class="form-control" id="exampleInputEmail1"
                      aria-describedby="emailHelp" placeholder="Enter content"></textarea>
        </div>
        <button class="btn btn-primary">Post</button>
    </form>
    <br>
</div>
</div>
</body>
</html>
