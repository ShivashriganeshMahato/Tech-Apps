<?php

function randomDate($sStartDate, $sEndDate, $sFormat = 'Y-m') {
   $fMin = strtotime($sStartDate);
   $fMax = strtotime($sEndDate);
   $fVal = mt_rand($fMin, $fMax);
   return date($sFormat, $fVal);
}

$words = ["tasty", "spectrum", "paradox", "shareholder", "bloody", "credit", "legend", "return", "horoscope", "original", "characteristic", "secretion", "football", "favourite", "hunting", "father", "precedent", "understand", "refuse", "expression", "outlook", "valid", "arise", "contrast", "transmission", "power", "rider", "folk", "professor", "clique", "anniversary", "revenge", "infrastructure", "accident", "mistreat", "confusion", "miserable", "shadow", "morsel", "elephant", "prisoner", "enhance", "residence", "recover", "refund", "recognize", "discourage", "government", "aspect", "exhibition"];

if (!isset($argv[1]) || ((int) ($argv[1])) <= 0 ||
    !isset($argv[2]) || gettype($argv[2]) != 'string') {
    echo 'Invalid arguments';
    die();
}

$count = $argv[1];
$path = $argv[2];

for ($k = 0; $k < $count; $k++) {
    $filename = randomDate('1990-01', '2018-12');
    for ($i = 0; $i < rand(1, 3); $i++) {
        $randInd = rand(0, count($words) - 1);
        $filename .= ' ' . $words[$randInd];
    }
    $filename .= '.txt';

    $content = '';
    for ($i = 0; $i < rand(5, 100); $i++) {
        $randInd = rand(0, count($words) - 1);
        $content .= $words[$randInd] . ' ';
    }

    file_put_contents($path . '/' . $filename, $content);
    echo 'CREATED ' . $filename . ' with content ' . $content . "\n";
}

?>
