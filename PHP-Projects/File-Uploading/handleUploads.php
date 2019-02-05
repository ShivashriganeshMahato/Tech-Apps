<?php

if (file_exists($file)) {
    echo "Sorry, file already exists.<br>";
    $uploadOk = 0;
}

if (isset($_POST["submit"])) {
    $dir = "uploadedImages/";
    $file = $dir . basename($_FILES["uploaded"]["name"]);
    $uploadOk = 1;

    $check = getimagesize($_FILES["uploaded"]["tmp_name"]);
    if ($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded<br>";
        echo "<a href='uploader.html'>Try again</a>";
    } else {
        if (move_uploaded_file($_FILES["uploaded"]["tmp_name"], $file)) {
            header('Location: gallery.php?successful');
            die();
        } else {
            echo "Sorry, there was an error uploading your file<br>";
            echo "<a href='uploader.html'>Try again</a>";
        }
    }
}

?>
