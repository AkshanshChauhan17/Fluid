<?php

// ==========================================
// DATABASE
// ==========================================

$host = "localhost";
$username = "root";
$password = "";
$database = "fluid";

// ==========================================
// HEADERS
// ==========================================

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ==========================================
// METHOD CHECK
// ==========================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests allowed"
    ]);

    exit;
}

// ==========================================
// CONNECT DATABASE
// ==========================================

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

// ==========================================
// CREATE USERS TABLE
// ==========================================

$createTable = "

CREATE TABLE IF NOT EXISTS users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

";

$conn->query($createTable);

// ==========================================
// GET JSON DATA
// ==========================================

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$name = trim(
    $data["name"] ?? ""
);

$email = trim(
    $data["email"] ?? ""
);

$passwordInput = trim(
    $data["password"] ?? ""
);

// ==========================================
// VALIDATION
// ==========================================

if (
    empty($name) ||
    empty($email) ||
    empty($passwordInput)
) {

    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
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
        "message" => "Invalid email address"
    ]);

    exit;
}

if (
    strlen($passwordInput) < 6
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Password must be at least 6 characters"
    ]);

    exit;
}

// ==========================================
// CHECK EXISTING ACCOUNT
// ==========================================

$checkStmt = $conn->prepare(
    "SELECT id FROM users WHERE email = ?"
);

$checkStmt->bind_param(
    "s",
    $email
);

$checkStmt->execute();

$result = $checkStmt->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Account already exists"
    ]);

    exit;
}

// ==========================================
// HASH PASSWORD
// ==========================================

$hashedPassword =
    password_hash(
        $passwordInput,
        PASSWORD_DEFAULT
    );

// ==========================================
// INSERT USER
// ==========================================

$stmt = $conn->prepare(

    "INSERT INTO users (

        name,
        email,
        password

    )

    VALUES (?, ?, ?)"

);

$stmt->bind_param(

    "sss",

    $name,
    $email,
    $hashedPassword

);

// ==========================================
// RESPONSE
// ==========================================

if ($stmt->execute()) {

    echo json_encode([

        "success" => true,

        "message" =>
            "Account created successfully",

        "user" => [

            "id" =>
                $stmt->insert_id,

            "name" =>
                $name,

            "email" =>
                $email

        ]

    ]);

} else {

    echo json_encode([

        "success" => false,

        "message" =>
            "Failed to create account"

    ]);

}

$stmt->close();
$conn->close();

?>