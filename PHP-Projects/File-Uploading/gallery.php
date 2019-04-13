<?php

$dir = "uploadedImages/";
$images = glob($dir . "*.{jpg,gif,png}", GLOB_BRACE);

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Gallery</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>

<body>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form action="renameImage.php" method="get" enctype="multipart/form-data">
                  <input style="display: none" name="old" value="" id="oldFilename">
                  <div class="form-group">
                      <label>New name</label>
                      <input type="text" name="newName" class="form-control" placeholder="Enter new name">
                  </div>
                  <input type="submit" class="btn btn-primary" value="Update" name="submit">
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
        <?php
            if (isset($_GET['successful'])) { ?>
                <div class="alert alert-success" role="alert">
                    Your file was successfully uploaed
                </div>
            <?php }
        ?>
        <?php
            if (isset($_GET['deleted'])) { ?>
                <div class="alert alert-warning" role="alert">
                    Your file was successfully deleted
                </div>
            <?php }
        ?>
        <?php
            if (isset($_GET['renamed'])) { ?>
                <div class="alert alert-primary" role="alert">
                    Your file was successfully renamed
                </div>
            <?php }
        ?>
        <a href="uploader.html">Upload another image</a>
        <br>
        <?php foreach ($images as $image) { ?>
            <h3><?php echo $image; ?></h3>
            <img src="<?php echo $image; ?>" width="400"/>
            <a href="deleteImage.php?image=<?php echo $image; ?>" class="btn btn-danger text-white">Delete</a>
            <button onclick="setOldFileName('<?php echo $image; ?>')" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Rename</button>
            <br><br>
        <?php } ?>
    <div>
    <script>
        var setOldFileName;
        $(function() {
            setOldFileName = function(name) {
                $('#oldFilename').val(name);
            }
        });
    </script>
</body>

</html>
