<?php
session_start();

echo 'Session: <br><br>';

$color = $_SESSION['color'];
$icecream = $_SESSION['icecream'];
$shape = $_SESSION['shape'];

echo 'Color: ' . $color;
echo '<br>';
echo 'Ice cream: ' . $icecream;
echo '<br>';
echo 'Shape: ' . $shape;

echo '<br><br><br>Cookies: <br><br>';

$color = $_COOKIE['color'];
$icecream = $_COOKIE['icecream'];
$shape = $_COOKIE['shape'];

echo 'Color: ' . $color;
echo '<br>';
echo 'Ice cream: ' . $icecream;
echo '<br>';
echo 'Shape: ' . $shape;
?>
