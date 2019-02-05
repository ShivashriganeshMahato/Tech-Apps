<?php

$filename = $_GET['image'];
unlink($filename);

header('Location: gallery.php?deleted');
die();

?>
