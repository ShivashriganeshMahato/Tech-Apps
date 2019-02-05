<?php

$dir = 'random';
$matched = scandir($dir, 1);

for ($i = 0; $i < count($matched); $i++) {
    if (preg_match("/([0-9]{4})-([0-9]{2}) ([a-z ]+).([a-z]+)/", $matched[$i], $groups)) {
        $orig = $groups[0];
        $year = $groups[1];
        $month = DateTime::createFromFormat('!m', $groups[2])->format('F');
        $name = $groups[3];
        $ext = $groups[4];
        $newName = $year . "-" . $month . " - " . $name . "." . $ext;

        $from = $dir . '/' . $orig;
        $to = $dir . '/' . $newName;

        if (!rename($from, $to)) {
            echo "Error occurred renaming " . $orig . " to " . $newName . "\n";
            continue;
        }
        echo 'RENAMED ' . $orig . ' to ' . $newName . "\n";
    }
}

?>
