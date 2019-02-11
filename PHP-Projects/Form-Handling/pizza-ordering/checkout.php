<?php

session_start();

$cart = $_SESSION['cart'];

$total = 0;

foreach ($cart as $i => $order) {
    $total += $order['price'];
    echo 'Successfully ordered a ' . $order['info']['size'] . ' pizza with ' . $order['info']['cheese'] . ' cheese and ' . $order['info']['sauce'] . ' sauce for $' . $order['price'];
    echo '<br>';
}

echo '<br>Total: $' . $total . '<br>';

$_SESSION['cart'] = array();

?>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

<br>
<a href="make.html">Make another order</a>
