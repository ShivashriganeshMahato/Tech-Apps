<?php

rename($_GET['old'], 'uploadedImages/' . $_GET['newName']);
header('Location: gallery.php?renamed');
die();

?>
