<?php

session_start();

$formUsername = $_POST['username'];
$formPassword = $_POST['password'];

$accounts = array(
    'johndoe' => 'coolpwd123',
    'janedoe' => 'anothercoolpwd123',
    'lebronjames' => 'bestpwd321',
    'richardfeynman' => 'physicsiscool555'
);

if (isset($accounts[$formUsername]) && $formPassword == $accounts[$formUsername]) {
    $_SESSION['username'] = $formUsername;
    header('Location: landing.php');
} else {
    header('Location: login.php?invalid');
}
die();

?>
