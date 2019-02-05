<?php

if (!isset($argv[1]) || gettype($argv[1]) != 'string') {
    echo 'Invalid arguments';
    die();
}

$dir = $argv[1];

$fileContents = array();
$fileContentsPool = array();
$fileDates = array();
$originals = array();

$matched = scandir($dir, 1);
for ($i = 0; $i < count($matched); $i++) {
    $name = $matched[$i];
    if ($name == "." || $name == "..") {
        continue;
    }
    $contents = file_get_contents($dir . '/' . $name);
    if (!isset($fileContents[$contents])) {
        $fileContents[$contents] = array();
    }
    $fileContentsPool[$name] = $contents;
    $fileContents[$contents][] = $name;
    $fileDates[$name] = (int) date("U", filectime($dir . '/' . $name));
}

foreach ($fileContents as $content => $names) {
    $oldest = $names[0];
    foreach ($names as $i => $name) {
        if ($fileDates[$name] < $fileDates[$oldest]) {
            $oldest = $name;
        }
    }
    $originals[$content] = $oldest;
    unset($fileDates[$oldest]);
}

foreach ($fileDates as $name => $date) {
    if (!unlink($dir . '/' . $name)) {
        echo "Error occurred deleting file " . $name . "\n";
        continue;
    }
    $originalName = $originals[$fileContentsPool[$name]];
    echo "DELETED " . $name . " (DUPLICATE OF " . $originalName . ")" . "\n";
}

?>
