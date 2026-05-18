<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$host = "sql101.infinityfree.com";
$username = "if0_41483941";
$password = "6Yj8biX6gQ";
$database = "if0_41483941_fluid";

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
|--------------------------------------------------------------------------
| CREATE TABLE
|--------------------------------------------------------------------------
*/

$createTable = "

CREATE TABLE IF NOT EXISTS blogs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    blog_title TEXT NOT NULL,

    author_name VARCHAR(255) NOT NULL,

    publish_date DATE NOT NULL,

    thumbnail VARCHAR(500) DEFAULT NULL,

    sections LONGTEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

";

$conn->query($createTable);

/*
|--------------------------------------------------------------------------
| GET BLOGS
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    if (isset($_GET["id"])) {

        $id = intval($_GET["id"]);

        $stmt = $conn->prepare("
        
            SELECT * FROM blogs
            WHERE id = ?
        
        ");

        $stmt->bind_param("i", $id);

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows === 0) {

            echo json_encode([
                "success" => false,
                "message" => "Blog not found"
            ]);

            exit;
        }

        $blog = $result->fetch_assoc();

        $blog["sections"] = json_decode(
            $blog["sections"],
            true
        );

        echo json_encode([
            "success" => true,
            "blog" => $blog
        ]);

        exit;
    }

    $result = $conn->query("
    
        SELECT * FROM blogs
        ORDER BY id DESC
    
    ");

    $blogs = [];

    while ($row = $result->fetch_assoc()) {

        $row["sections"] = json_decode(
            $row["sections"],
            true
        );

        $blogs[] = $row;
    }

    echo json_encode([
        "success" => true,
        "blogs" => $blogs
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| ONLY POST ALLOWED
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST allowed"
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| FORM DATA
|--------------------------------------------------------------------------
*/

$blog_title = trim(
    $_POST["blog_title"] ?? ""
);

$author_name = trim(
    $_POST["author_name"] ?? "Admin"
);

$publish_date = trim(
    $_POST["publish_date"] ?? date("Y-m-d")
);

$sections = $_POST["sections"] ?? "";

/*
|--------------------------------------------------------------------------
| VALIDATION
|--------------------------------------------------------------------------
*/

if (
    empty($blog_title) ||
    empty($sections)
) {

    echo json_encode([
        "success" => false,
        "message" => "Required fields missing"
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| IMAGE UPLOAD
|--------------------------------------------------------------------------
*/

$thumbnailPath = "";

if (
    isset($_FILES["thumbnail"]) &&
    $_FILES["thumbnail"]["error"] !== 4
) {

    $file = $_FILES["thumbnail"];

    if ($file["error"] === 0) {

        $allowedExtensions = [
            "jpg",
            "jpeg",
            "png",
            "webp"
        ];

        $extension = strtolower(
            pathinfo(
                $file["name"],
                PATHINFO_EXTENSION
            )
        );

        if (
            !in_array(
                $extension,
                $allowedExtensions
            )
        ) {

            echo json_encode([
                "success" => false,
                "message" => "Invalid image format"
            ]);

            exit;
        }

        /*
        |--------------------------------------------------------------------------
        | CREATE UPLOAD FOLDER
        |--------------------------------------------------------------------------
        */

        $uploadDir =
            __DIR__ . "/uploads/blogs/";

        if (
            !file_exists($uploadDir)
        ) {

            mkdir(
                $uploadDir,
                0777,
                true
            );
        }

        /*
        |--------------------------------------------------------------------------
        | GENERATE FILE NAME
        |--------------------------------------------------------------------------
        */

        $newFileName =
            time() .
            "_" .
            uniqid() .
            "." .
            $extension;

        $fullUploadPath =
            $uploadDir .
            $newFileName;

        /*
        |--------------------------------------------------------------------------
        | SAVE DB PATH
        |--------------------------------------------------------------------------
        */

        $thumbnailPath =
            "/uploads/blogs/" .
            $newFileName;

        /*
        |--------------------------------------------------------------------------
        | MOVE FILE
        |--------------------------------------------------------------------------
        */

        $moved = move_uploaded_file(
            $file["tmp_name"],
            $fullUploadPath
        );

        if (!$moved) {

            echo json_encode([
                "success" => false,
                "message" => "Failed to upload image"
            ]);

            exit;
        }

    } else {

        echo json_encode([
            "success" => false,
            "message" =>
                "Upload error code: " .
                $file["error"]
        ]);

        exit;
    }
}

/*
|--------------------------------------------------------------------------
| INSERT BLOG
|--------------------------------------------------------------------------
*/

$stmt = $conn->prepare("

INSERT INTO blogs (

    blog_title,
    author_name,
    publish_date,
    thumbnail,
    sections

)

VALUES (?, ?, ?, ?, ?)

");

$stmt->bind_param(

    "sssss",

    $blog_title,
    $author_name,
    $publish_date,
    $thumbnailPath,
    $sections

);

if ($stmt->execute()) {

    echo json_encode([

        "success" => true,

        "message" => "Blog saved successfully",

        "blog_id" => $stmt->insert_id,

        "thumbnail" => $thumbnailPath

    ]);

} else {

    echo json_encode([

        "success" => false,

        "message" => "Failed to save blog"

    ]);
}

$stmt->close();

$conn->close();

?>