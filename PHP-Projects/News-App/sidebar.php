<?php

$widgets = ["Login", "Ad", "Posts"];

?>

<style>
    #sidebar {
        padding: 20px;
    }
</style>

<div id="sidebar" class="bg-primary w-100">
    <?php foreach ($widgets as $widget) { ?>
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"><?php echo $widget ?></h5>
                <?php include ('widgets/' . strtolower($widget) . '.php'); ?>
            </div>
        </div>
        <br><br>
    <?php } ?>
</div>
