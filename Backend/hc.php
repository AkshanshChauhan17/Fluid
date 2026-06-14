<?php

// ======================================================
// HOME CALCULATOR API
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
// CHECK METHOD
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
// CREATE TABLE
// ======================================================

$createTable = "

CREATE TABLE IF NOT EXISTS home_calc (

    id INT AUTO_INCREMENT PRIMARY KEY,

    monthly_volume DECIMAL(12,2) NOT NULL,
    statement_fees DECIMAL(12,2) NOT NULL,

    current_provider VARCHAR(255) DEFAULT '',
    practice_type VARCHAR(255) DEFAULT '',
    contact VARCHAR(255) DEFAULT '',

    uploaded_file VARCHAR(500) DEFAULT '',

    effective_rate DECIMAL(12,2) NOT NULL,
    estimated_savings DECIMAL(12,2) NOT NULL,
    yearly_savings DECIMAL(12,2) NOT NULL,
    risk_score INT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

";

$conn->query($createTable);

// ======================================================
// GET VALUES
// ======================================================

$monthly_volume = trim(
    $_POST["monthly_volume"] ?? ""
);

$statement_fees = trim(
    $_POST["statement_fees"] ?? ""
);

$current_provider = trim(
    $_POST["current_provider"] ?? ""
);

$practice_type = trim(
    $_POST["practice_type"] ?? ""
);

$contact = trim(
    $_POST["contact"] ?? ""
);

// ======================================================
// VALIDATE STEP 1
// ======================================================

if (
    empty($monthly_volume) ||
    empty($statement_fees)
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Calculator values required"
    ]);

    exit;
}

if (
    !is_numeric($monthly_volume) ||
    !is_numeric($statement_fees)
) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Invalid calculator values"
    ]);

    exit;
}

// ======================================================
// CALCULATIONS
// ======================================================

$effectiveRate =
    (
        $statement_fees /
        $monthly_volume
    ) * 100;

$industryAverage = 2.4;

$potentialReduction =
    $effectiveRate -
    $industryAverage;

if ($potentialReduction < 0) {
    $potentialReduction = 0.3;
}

$estimated_savings =
    (
        $monthly_volume *
        ($potentialReduction / 100)
    );

$yearly_savings =
    $estimated_savings * 12;

$risk_score = 65;

if ($effectiveRate > 3.5) {

    $risk_score = 92;

} elseif ($effectiveRate > 3) {

    $risk_score = 84;

} elseif ($effectiveRate > 2.7) {

    $risk_score = 76;

}

$effectiveRate =
    round($effectiveRate, 2);

$estimated_savings =
    round($estimated_savings, 2);

$yearly_savings =
    round($yearly_savings, 2);

// ======================================================
// STEP 1 ONLY
// IF FINAL FORM IS NOT FILLED
// ======================================================

$isFinalSubmit =
    !empty($current_provider) &&
    !empty($practice_type) &&
    !empty($contact) &&
    $current_provider !== "Pending";

// ======================================================
// RETURN ONLY CALCULATIONS
// ======================================================

if (!$isFinalSubmit) {

    echo json_encode([

        "success" => true,

        "step" => 1,

        "message" =>
            "Calculation completed",

        "results" => [

            "effective_rate" =>
                $effectiveRate,

            "monthly_savings" =>
                $estimated_savings,

            "yearly_savings" =>
                $yearly_savings,

            "risk_score" =>
                $risk_score

        ]

    ]);

    exit;
}

// ======================================================
// FILE UPLOAD
// ======================================================

$uploadedFilePath = "";

if (isset($_FILES["file"])) {

    $file = $_FILES["file"];

    if ($file["error"] === 0) {

        $allowedExtensions = [
            "pdf",
            "jpg",
            "jpeg",
            "png"
        ];

        $maxFileSize =
            10 * 1024 * 1024;

        $fileExtension = strtolower(
            pathinfo(
                $file["name"],
                PATHINFO_EXTENSION
            )
        );

        if (
            in_array(
                $fileExtension,
                $allowedExtensions
            )
        ) {

            if (
                $file["size"] <=
                $maxFileSize
            ) {

                $uploadDir =
                    "uploads/";

                if (
                    !file_exists(
                        $uploadDir
                    )
                ) {

                    mkdir(
                        $uploadDir,
                        0777,
                        true
                    );

                }

                $newFileName =
                    time() .
                    "_" .
                    uniqid() .
                    "." .
                    $fileExtension;

                $uploadedFilePath =
                    $uploadDir .
                    $newFileName;

                move_uploaded_file(
                    $file["tmp_name"],
                    $uploadedFilePath
                );

            }

        }

    }

}

// ======================================================
// INSERT FINAL DATA
// ======================================================

$stmt = $conn->prepare("

INSERT INTO home_calc (

    monthly_volume,
    statement_fees,

    current_provider,
    practice_type,
    contact,

    uploaded_file,

    effective_rate,
    estimated_savings,
    yearly_savings,
    risk_score

)

VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

");

$stmt->bind_param(

    "ddssssdddi",

    $monthly_volume,
    $statement_fees,

    $current_provider,
    $practice_type,
    $contact,

    $uploadedFilePath,

    $effectiveRate,
    $estimated_savings,
    $yearly_savings,
    $risk_score

);

// ======================================================
// EXECUTE
// ======================================================

if ($stmt->execute()) {

    echo json_encode([

        "success" => true,

        "step" => 2,

        "message" =>
            "Audit submitted successfully",

        "results" => [

            "effective_rate" =>
                $effectiveRate,

            "monthly_savings" =>
                $estimated_savings,

            "yearly_savings" =>
                $yearly_savings,

            "risk_score" =>
                $risk_score

        ]

    ]);

} else {

    echo json_encode([

        "success" => false,

        "message" =>
            "Database insert failed"

    ]);

}

$stmt->close();
$conn->close();

?>