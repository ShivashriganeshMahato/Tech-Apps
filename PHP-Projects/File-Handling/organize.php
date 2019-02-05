<?php

if (!isset($argv[1]) || gettype($argv[1]) != 'string' ||
    !isset($argv[2]) || gettype($argv[2]) != 'string') {
    echo 'Invalid arguments';
    die();
}

$fromDir = $argv[1];
$toDir = $argv[2];

$matched = scandir($fromDir, 1);
for ($i = 0; $i < count($matched); $i++) {
    if (preg_match("/([0-9]{4})-([0-9]{2}) ([a-z ]+).([a-z]+)/", $matched[$i], $groups)) {
        $orig = $groups[0];
        $year = $groups[1];
        $month = $groups[2];
        $name = $groups[3];
        $ext = $groups[4];

        $orgiFullPath = $fromDir . "/" . $orig;
        $newPath = $year . "/" . $month . "/" . $name . "." . $ext;
        $newFullPath = $toDir . "/" . $newPath;

        $yearDir = $toDir . "/" . $year;
        if (!file_exists($yearDir) && !is_dir($yearDir)) {
            if (!mkdir($yearDir)) {
                echo "Error occurred creating folder / " . $year . "\n";
                continue;
            }
            echo "CREATED FOLDER /" . $year . "\n";
        }

        $monthDir = $toDir . "/" . $year . "/" . $month;
        if (!file_exists($monthDir) && !is_dir($monthDir)) {
            if (!mkdir($monthDir)) {
                echo "Error occurred creating folder / " . $year . "/" . $month . "\n";
                continue;
            }
            echo "CREATED FOLDER /" . $year . "/" . $month . "\n";
        }

        if (!rename($orgiFullPath, $newFullPath)) {
            echo "Error occurred moving " . $orig . " to /" . $newPath . "\n";
            continue;
        }
        echo "MOVED " . $orig . " to /" . $newPath . "\n";
    }
}

?>
