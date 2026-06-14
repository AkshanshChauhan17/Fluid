<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "localhost";
$username = "root";
$password = "";
$database = "fluid";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

if ($conn->connect_error) {

    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);

    exit;
}

/*

GET ALL USERS

/Backend/users.php

GET SINGLE USER

/Backend/users.php?id=1

*/

if ($_SERVER["REQUEST_METHOD"] !== "GET") {

    echo json_encode([
        "success" => false,
        "message" => "Only GET method allowed"
    ]);

    exit;
}

$id = isset($_GET["id"])
    ? intval($_GET["id"])
    : null;

/* =========================
   GET SINGLE USER BY ID
========================= */

if ($id) {

    $stmt = $conn->prepare("
    
        SELECT 
            id,
            name,
            email,
            created_at
        FROM users
        WHERE id = ?
    
    ");

    $stmt->bind_param("i", $id);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 0) {

        echo json_encode([
            "success" => false,
            "message" => "User not found"
        ]);

        exit;
    }

    $user = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "user" => $user
    ]);

    $stmt->close();
    $conn->close();

    exit;
}

/* =========================
   GET ALL USERS
========================= */

$result = $conn->query("

    SELECT 
        id,
        name,
        email,
        created_at
    FROM users
    ORDER BY id DESC

");

$users = [];

while ($row = $result->fetch_assoc()) {

    $users[] = $row;
}

echo json_encode([
    "success" => true,
    "total" => count($users),
    "users" => $users
]);

$conn->close();

?>