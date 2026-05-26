<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "database.php";

$sql = "SELECT * FROM foods";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>