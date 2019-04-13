<?php

session_start();

$color = NULL;
$icecream = NULL;
$shape = NULL;

if (isset($_GET['color'])) {
    $color = $_GET['color'];
    $icecream = $_GET['icecream'];
    $shape = $_GET['shape'];

    echo 'Color: ' . $color;
    echo '<br>';
    echo 'Ice cream: ' . $icecream;
    echo '<br>';
    echo 'Shape: ' . $shape;
} else {
    $color = $_POST['color'];
    $icecream = $_POST['icecream'];
    $shape = $_POST['shape'];

    echo 'Color: ' . $color;
    echo '<br>';
    echo 'Ice cream: ' . $icecream;
    echo '<br>';
    echo 'Shape: ' . $shape;
}

$_SESSION['color'] = $color;
$_SESSION['icecream'] = $icecream;
$_SESSION['shape'] = $shape;

setcookie('color', $color, time() + 86400 * 30);
setcookie('icecream', $icecream, time() + 86400 * 30);
setcookie('shape', $shape, time() + 86400 * 30);

header("Location: MyOtherFormHandler.php");
die();

?>
