<?php

// ==========================================
// HEADERS
// ==========================================

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests allowed"
    ]);

    exit;
}

// ==========================================
// DATABASE
// ==========================================

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "fluid"
);

if ($conn->connect_error) {

    echo json_encode([
        "success" => false,
        "message" => $conn->connect_error
    ]);

    exit;
}

// ==========================================
// CREATE TABLE IF NOT EXISTS
// ==========================================

$conn->query("

CREATE TABLE IF NOT EXISTS users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NULL,

    google_id VARCHAR(255) NULL,

    profile_pic TEXT NULL,

    login_type VARCHAR(50) DEFAULT 'email',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

");

// ==========================================
// GET JSON DATA
// ==========================================

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$accessToken =
    trim(
        $data["access_token"] ?? ""
    );

if (empty($accessToken)) {

    echo json_encode([
        "success" => false,
        "message" => "Access token missing",
        "received" => $data
    ]);

    exit;
}

// ==========================================
// GET USER FROM GOOGLE
// ==========================================

$ch = curl_init();

curl_setopt_array($ch, [

    CURLOPT_URL =>
        "https://www.googleapis.com/oauth2/v2/userinfo",

    CURLOPT_RETURNTRANSFER => true,

    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $accessToken
    ]

]);

$response = curl_exec($ch);

curl_close($ch);

$googleUser =
    json_decode(
        $response,
        true
    );

if (
    empty($googleUser["email"])
) {

    echo json_encode([
        "success" => false,
        "message" => "Google verification failed",
        "google_response" => $googleUser
    ]);

    exit;
}

// ==========================================
// USER DATA
// ==========================================

$name =
    trim(
        $googleUser["name"] ?? ""
    );

$email =
    trim(
        $googleUser["email"] ?? ""
    );

$googleId =
    trim(
        $googleUser["id"] ?? ""
    );

$picture =
    trim(
        $googleUser["picture"] ?? ""
    );

// ==========================================
// CHECK USER
// ==========================================

$stmt = $conn->prepare(
    "SELECT *
     FROM users
     WHERE email = ?"
);

$stmt->bind_param(
    "s",
    $email
);

$stmt->execute();

$result =
    $stmt->get_result();

// ==========================================
// LOGIN
// ==========================================

if ($result->num_rows > 0) {

    $user =
        $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "message" => "Login successful",
        "user" => $user
    ]);

    exit;
}

// ==========================================
// CREATE ACCOUNT
// ==========================================

$randomPassword =
    password_hash(
        uniqid(
            "google_",
            true
        ),
        PASSWORD_DEFAULT
    );

$stmt = $conn->prepare(

    "INSERT INTO users (

        name,
        email,
        password,
        google_id,
        profile_pic,
        login_type

    )

    VALUES (

        ?,
        ?,
        ?,
        ?,
        ?,
        'google'

    )"

);

$stmt->bind_param(

    "sssss",

    $name,
    $email,
    $randomPassword,
    $googleId,
    $picture

);

if ($stmt->execute()) {

    echo json_encode([

        "success" => true,

        "message" =>
            "Google account created",

        "user" => [

            "id" =>
                $stmt->insert_id,

            "name" =>
                $name,

            "email" =>
                $email,

            "picture" =>
                $picture

        ]

    ]);

} else {

    echo json_encode([

        "success" => false,

        "message" =>
            $stmt->error

    ]);

}

$stmt->close();
$conn->close();

?>