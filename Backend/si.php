<?php

// ======================================================
// SIGNIN API
// FILE NAME: signin.php
// ======================================================

// ======================================================
// DATABASE
// ======================================================

$host = "localhost";
$username = "root";
$password = "";
$database = "fluid";

// ======================================================
// HEADERS
// ======================================================

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ======================================================
// METHOD CHECK
// ======================================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests allowed"
    ]);

    exit;
}

// ======================================================
// CONNECT DATABASE
// ======================================================

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

if ($conn->connect_error) {

    echo json_encode([
        "success" => false,
        "message" => $conn->connect_error
    ]);

    exit;
}

// ======================================================
// CREATE USERS TABLE
// ======================================================

$createTable = "

CREATE TABLE IF NOT EXISTS users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) DEFAULT '',

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

";

$conn->query($createTable);

// ======================================================
// GET DATA
// ======================================================

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$email = trim(
    $data["email"] ?? ""
);

$passwordInput = trim(
    $data["password"] ?? ""
);

// ======================================================
// VALIDATION
// ======================================================

if (
    empty($email) ||
    empty($passwordInput)
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "All fields are required"
    ]);

    exit;
}

if (
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Invalid email address"
    ]);

    exit;
}

// ======================================================
// FIND USER
// ======================================================

$stmt = $conn->prepare(
    "SELECT * FROM users WHERE email = ? LIMIT 1"
);

$stmt->bind_param(
    "s",
    $email
);

$stmt->execute();

$result = $stmt->get_result();

// ======================================================
// USER CHECK
// ======================================================

if ($result->num_rows === 0) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Account not found"
    ]);

    exit;
}

$user = $result->fetch_assoc();

// ======================================================
// VERIFY PASSWORD
// ======================================================

if (
    !password_verify(
        $passwordInput,
        $user["password"]
    )
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Incorrect password"
    ]);

    exit;
}

// ======================================================
// SUCCESS
// ======================================================

echo json_encode([

    "success" => true,

    "message" =>
        "Login successful",

    "user" => [

        "id" =>
            $user["id"],

        "name" =>
            $user["name"],

        "email" =>
            $user["email"]

    ]

]);

$stmt->close();
$conn->close();

?>