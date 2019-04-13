<?php

if (!isset($argv[1]) || gettype($argv[1]) != 'string' ||
    !isset($argv[2]) || ((int) ($argv[2])) <= 0) {
    echo 'Invalid arguments';
    die();
}

$fromDir = $argv[1];
$copies = $argv[2];

$matched = scandir($fromDir, 1);
for ($i = 0; $i < count($matched); $i++) {
    if (preg_match("/([0-9]{4})-([0-9]{2}) ([a-z ]+).([a-z]+)/", $matched[$i], $groups)) {
        $orig = $groups[0];
        $year = $groups[1];
        $month = $groups[2];
        $name = $groups[3];
        $ext = $groups[4];

        for ($j = 1; $j <= $copies; $j++) {
            $newName = $year . "-" . $month . " " . $name . " (" . $j . ")." . $ext;
            if (!copy($fromDir . '/' . $orig, $fromDir . '/' . $newName)) {
                echo "Error occurred creating file " . $newName . "\n";
                continue;
            }
            echo "CREATED " . $newName . "\n";
        }
    }
}


?>
