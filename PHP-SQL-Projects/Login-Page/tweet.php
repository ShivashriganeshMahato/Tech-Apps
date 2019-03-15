<?php

$id = $_GET['id'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT user.username, tweet.content FROM tweet JOIN user ON tweet.userid=user.id WHERE tweet.id=" . $id;
$result = $conn->query($query);

$tweet = NULL;

while ($row = $result->fetch_assoc()) {
    $tweet = $row;
}

$pattern = '/\#([A-Za-z0-9_]+)/i';
$replacement = '<a href="hashtag.php?tag=$1">#$1</a>';
$tweet['content'] = preg_replace($pattern, $replacement, $tweet['content']);

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Tweet #<?php echo $id ?></title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

        <style>
            .card {
                margin: auto;
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
        <div class="container">
            <br><br><br><br>
            <div class="card text-white bg-info" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title"><a href="user.php?uname=<?php echo $tweet['username'] ?>"><?php echo $tweet['username'] ?></a></h5>
                <p class="card-text"><?php echo $tweet['content'] ?></p>
              </div>
            </div>
        </div>
        </div>
    </body>
</html>
