<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include "database.php";

// Get JSON data from React
$data = json_decode(file_get_contents("php://input"), true);

// Safe check (important)
if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit;
}

$user_id = $data['user_id'];
$food_id = $data['food_id'];
$quantity = $data['quantity'];
$total_price = $data['total_price'];

// Insert query
$sql = "INSERT INTO orders (user_id, food_id, quantity, total_price)
        VALUES ('$user_id', '$food_id', '$quantity', '$total_price')";

if ($conn->query($sql)) {
    echo json_encode([
        "success" => true,
        "message" => "Order placed successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Order failed",
        "error" => $conn->error
    ]);
}
?>