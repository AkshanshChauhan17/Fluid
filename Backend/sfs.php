<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "fluid";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Only POST method allowed"
    ]);
    exit;
}

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

$createTable = "
CREATE TABLE IF NOT EXISTS custom_savings_analysis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    practice_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    uploaded_file VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
";

$conn->query($createTable);

$name = trim($_POST["name"] ?? "");
$practice = trim($_POST["practice"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");

if (
    empty($name) ||
    empty($practice) ||
    empty($email) ||
    empty($phone)
) {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email"
    ]);
    exit;
}

if (!isset($_FILES["file"])) {
    echo json_encode([
        "success" => false,
        "message" => "File is required"
    ]);
    exit;
}

$file = $_FILES["file"];

if ($file["error"] !== 0) {
    echo json_encode([
        "success" => false,
        "message" => "File upload failed"
    ]);
    exit;
}

$allowedExtensions = [
    "pdf",
    "jpg",
    "jpeg",
    "png"
];

$maxFileSize = 10 * 1024 * 1024;

$fileExtension = strtolower(
    pathinfo($file["name"], PATHINFO_EXTENSION)
);

if (!in_array($fileExtension, $allowedExtensions)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid file type"
    ]);
    exit;
}

if ($file["size"] > $maxFileSize) {
    echo json_encode([
        "success" => false,
        "message" => "File size exceeds 10MB"
    ]);
    exit;
}

$uploadDir = "uploads/";

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$newFileName =
    time() .
    "_" .
    uniqid() .
    "." .
    $fileExtension;

$filePath = $uploadDir . $newFileName;

if (!move_uploaded_file(
    $file["tmp_name"],
    $filePath
)) {
    echo json_encode([
        "success" => false,
        "message" => "Failed to save file"
    ]);
    exit;
}

$stmt = $conn->prepare("
    INSERT INTO custom_savings_analysis
    (
        name,
        practice_name,
        email,
        phone,
        uploaded_file
    )
    VALUES (?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "sssss",
    $name,
    $practice,
    $email,
    $phone,
    $filePath
);

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Database insert failed"
    ]);

}

$stmt->close();
$conn->close();

?>