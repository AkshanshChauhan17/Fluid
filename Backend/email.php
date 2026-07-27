<?php

// ======================
// CORS
// ======================

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ======================
// CONFIG
// ======================

require __DIR__ . "/vendor/autoload.php";

use Mailjet\Client;
use Mailjet\Resources;

$DB_HOST = "localhost";
$DB_NAME = "fluid";
$DB_USER = "root";
$DB_PASS = "";

$MAILJET_PUBLIC_KEY  = "66e59d15d4be7ba86b4eabaaf007862a";
$MAILJET_PRIVATE_KEY = "a3062580492f1ab1f1461b13a8c967c3";

$FROM_EMAIL = "noreply@fluid.financial";
$FROM_NAME  = "fluid.financial";

// ======================
// DATABASE
// ======================

$conn = new mysqli(
    $DB_HOST,
    $DB_USER,
    $DB_PASS,
    $DB_NAME
);

if ($conn->connect_error) {

    echo json_encode([
        "success"=>false,
        "message"=>"Database connection failed."
    ]);

    exit;
}

$conn->set_charset("utf8mb4");

// ======================
// GET JSON
// ======================

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {

    echo json_encode([
        "success"=>false,
        "message"=>"Invalid JSON."
    ]);

    exit;
}

$action = $data["action"] ?? "";

// =======================================================
// SEND OTP
// =======================================================

if ($action == "send_otp") {

    if (empty($data["email"])) {

        echo json_encode([
            "success"=>false,
            "message"=>"Email required."
        ]);

        exit;
    }

    $email = strtolower(trim($data["email"]));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        echo json_encode([
            "success"=>false,
            "message"=>"Invalid email."
        ]);

        exit;
    }

    // Check user

    $stmt = $conn->prepare("SELECT id FROM users WHERE email=?");
    $stmt->bind_param("s",$email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows == 0) {

        echo json_encode([
            "success"=>false,
            "message"=>"User not found."
        ]);

        exit;
    }

    $otp = random_int(100000,999999);

    $expiry = date(
        "Y-m-d H:i:s",
        strtotime("+10 minutes")
    );

    $stmt = $conn->prepare("
        UPDATE users
        SET
            otp=?,
            otp_expiry=?
        WHERE email=?
    ");

    $stmt->bind_param(
        "sss",
        $otp,
        $expiry,
        $email
    );

    $stmt->execute();

    // Mailjet

    try {

        $mj = new Client(
            $MAILJET_PUBLIC_KEY,
            $MAILJET_PRIVATE_KEY,
            true,
            ["version"=>"v3.1"]
        );

        $body = [

            "Messages"=>[

                [

                    "From"=>[
                        "Email"=>$FROM_EMAIL,
                        "Name"=>$FROM_NAME
                    ],

                    "To"=>[
                        [
                            "Email"=>$email
                        ]
                    ],

                    "Subject"=>"Your OTP Code",

                    "TextPart"=>"Your OTP is $otp. Valid for 10 minutes.",

                    "HTMLPart"=>"

                    <div style='font-family:Arial'>

                        <h2>Email Verification</h2>

                        <p>Your OTP is</p>

                        <h1 style='letter-spacing:8px'>$otp</h1>

                        <p>This OTP expires in 10 minutes.</p>

                    </div>

                    "

                ]

            ]

        ];

        $response = $mj->post(
            Resources::$Email,
            ["body"=>$body]
        );

        if (!$response->success()) {

            echo json_encode([
                "success"=>false,
                "message"=>"Mail could not be sent."
            ]);

            exit;
        }

        echo json_encode([
            "success"=>true,
            "message"=>"OTP sent successfully."
        ]);

    }

    catch(Exception $e){

        echo json_encode([
            "success"=>false,
            "message"=>$e->getMessage()
        ]);

    }

    exit;

}

// =======================================================
// VERIFY OTP
// =======================================================

if ($action == "verify_otp") {

    if (
        empty($data["email"]) ||
        empty($data["otp"])
    ) {

        echo json_encode([
            "success"=>false,
            "message"=>"Email and OTP required."
        ]);

        exit;
    }

    $email = strtolower(trim($data["email"]));
    $otp = trim($data["otp"]);

    $stmt = $conn->prepare("
        SELECT
            otp,
            otp_expiry
        FROM users
        WHERE email=?
    ");

    $stmt->bind_param("s",$email);
    $stmt->execute();

    $user = $stmt->get_result()->fetch_assoc();

    if (!$user) {

        echo json_encode([
            "success"=>false,
            "message"=>"User not found."
        ]);

        exit;
    }

    if ($user["otp"] != $otp) {

        echo json_encode([
            "success"=>false,
            "message"=>"Invalid OTP."
        ]);

        exit;
    }

    if (strtotime($user["otp_expiry"]) < time()) {

        echo json_encode([
            "success"=>false,
            "message"=>"OTP expired."
        ]);

        exit;
    }

    $stmt = $conn->prepare("
        UPDATE users
        SET

            otp=NULL,
            otp_expiry=NULL,
            email_verified=1

        WHERE email=?
    ");

    $stmt->bind_param("s",$email);
    $stmt->execute();

    echo json_encode([
        "success"=>true,
        "message"=>"OTP verified successfully."
    ]);

    exit;

}

// =======================================================
// INVALID ACTION
// =======================================================

echo json_encode([
    "success"=>false,
    "message"=>"Invalid action."
]);