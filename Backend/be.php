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

$createTable = "

CREATE TABLE IF NOT EXISTS blogs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    blog_title TEXT NOT NULL,

    seo_title VARCHAR(255) DEFAULT NULL,

    slug VARCHAR(255) DEFAULT NULL,

    meta_description TEXT DEFAULT NULL,

    author_name VARCHAR(255) NOT NULL,

    publish_date DATE NOT NULL,

    thumbnail VARCHAR(500) DEFAULT NULL,

    sections LONGTEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY slug_unique (slug)

)

";

$conn->query($createTable);

$columnCheck = $conn->query("SHOW COLUMNS FROM blogs LIKE 'seo_title'");
if ($columnCheck->num_rows === 0) {
    $conn->query("ALTER TABLE blogs ADD COLUMN seo_title VARCHAR(255) NULL AFTER blog_title");
}

$columnCheck = $conn->query("SHOW COLUMNS FROM blogs LIKE 'slug'");
if ($columnCheck->num_rows === 0) {
    $conn->query("ALTER TABLE blogs ADD COLUMN slug VARCHAR(255) NULL AFTER seo_title");
}

$columnCheck = $conn->query("SHOW COLUMNS FROM blogs LIKE 'meta_description'");
if ($columnCheck->num_rows === 0) {
    $conn->query("ALTER TABLE blogs ADD COLUMN meta_description TEXT NULL AFTER slug");
}

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

    if (isset($_GET["slug"])) {

        $slug = trim($_GET["slug"]);

        $stmt = $conn->prepare("
            SELECT * FROM blogs
            WHERE slug = ?
            LIMIT 1
        ");

        $stmt->bind_param("s", $slug);
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
        SELECT *
        FROM blogs
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

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST allowed"
    ]);

    exit;
}

$blog_title = trim(
    $_POST["blog_title"] ?? ""
);

$seo_title = trim(
    $_POST["seo_title"] ?? $blog_title
);

$slug = trim(
    $_POST["slug"] ?? ""
);

$meta_description = trim(
    $_POST["meta_description"] ?? ""
);

$author_name = trim(
    $_POST["author_name"] ?? "Admin"
);

$publish_date = trim(
    $_POST["publish_date"] ?? date("Y-m-d")
);

$sections = $_POST["sections"] ?? "";

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

if (empty($slug)) {

    $slug = strtolower($blog_title);

    $slug = preg_replace(
        "/[^a-z0-9\s-]/",
        "",
        $slug
    );

    $slug = preg_replace(
        "/\s+/",
        "-",
        $slug
    );

    $slug = preg_replace(
        "/-+/",
        "-",
        $slug
    );

    $slug = trim($slug, "-");
}

if (empty($meta_description)) {

    $decodedSections = json_decode(
        $sections,
        true
    );

    if (is_array($decodedSections)) {

        foreach ($decodedSections as $section) {

            if (
                isset($section["type"]) &&
                $section["type"] === "paragraph" &&
                !empty($section["content"])
            ) {

                $meta_description = substr(
                    strip_tags($section["content"]),
                    0,
                    160
                );

                break;
            }
        }
    }
}

$checkSlug = $conn->prepare("
    SELECT id
    FROM blogs
    WHERE slug = ?
");

$checkSlug->bind_param(
    "s",
    $slug
);

$checkSlug->execute();

$slugResult = $checkSlug->get_result();

if ($slugResult->num_rows > 0) {
    $slug .= "-" . time();
}

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

        $uploadDir =
            __DIR__ . "/uploads/blogs/";

        if (!file_exists($uploadDir)) {

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
            $extension;

        $fullUploadPath =
            $uploadDir .
            $newFileName;

        $thumbnailPath =
            "/uploads/blogs/" .
            $newFileName;

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

$stmt = $conn->prepare("

INSERT INTO blogs (

    blog_title,
    seo_title,
    slug,
    meta_description,
    author_name,
    publish_date,
    thumbnail,
    sections

)

VALUES (?, ?, ?, ?, ?, ?, ?, ?)

");

$stmt->bind_param(

    "ssssssss",

    $blog_title,
    $seo_title,
    $slug,
    $meta_description,
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

        "slug" => $slug,

        "thumbnail" => $thumbnailPath

    ]);

} else {

    echo json_encode([

        "success" => false,

        "message" => $stmt->error

    ]);
}

$stmt->close();
$conn->close();

?>