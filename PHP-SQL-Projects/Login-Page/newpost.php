<?php
session_start();

$content = $_POST['content'];
$userid = $_SESSION['id'];

include 'credentials.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tweet (userid, content) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userid, $content);
$stmt->execute();
$tweetid = $stmt->insert_id;

function addHashtag($conn, $content, $tweetid) {
    $sql = "SELECT content FROM hashtag WHERE content=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $content);
    $stmt->execute();
    $stmt->bind_result($fetched_content);
    $stmt->fetch();

    if (!$fetched_content) {
        $sql = "INSERT INTO hashtag (content) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $content);
        $stmt->execute();
        $hashtagid = $stmt->insert_id;

        $sql = "INSERT INTO hashtag_tweet (hashtagid, tweetid) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $hashtagid, $tweetid);
        $stmt->execute();
    }
}

preg_match_all("/#([0-9a-zA-Z_]+)/U", $content, $pat_array);

foreach ($pat_array[1] as $i => $hashtag) {
    addHashtag($conn, strtolower($hashtag), $tweetid);
}

$conn->close();
?>
