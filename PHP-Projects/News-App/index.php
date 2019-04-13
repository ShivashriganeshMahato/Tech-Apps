<?php ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>News</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <?php include 'header.php'; ?>
            <?php include 'navbar.php'; ?>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <?php include 'sidebar.php'; ?>
                    </div>
                    <div class="col-9 bg-success">
                        <?php
                            if (isset($_GET['post'])) {
                                include ('Post/' . $_GET['post'] . '.php');
                            } else { ?>
                                <div class="mt-5 w-100 text-center">
                                    <h2 class="text-white">Please select a Post</h2>
                                </div>
                            <?php }
                        ?>
                    </div>
                </div>
                <br>
                <?php include 'footer.php'; ?>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
 </html>
