<?php

function select($columns, $table, $clause, $binding, $bound_vars) {
    $sql = "SELECT $columns FROM $table WHERE $clause";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param($binding, $uname, $pwd);
    $stmt->execute();
    $stmt->bind_result($fetched_username);
    $stmt->fetch();
}

?>
