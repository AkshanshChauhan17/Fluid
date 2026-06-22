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

/* =========================================
   SINGLE BLOG BY SLUG
========================================= */

$slug = $_GET["slug"] ?? null;

if ($slug) {

    $stmt = $conn->prepare("

        SELECT *
        FROM blogs
        WHERE slug = ?

        LIMIT 1

    ");

    $stmt->bind_param(
        "s",
        $slug
    );

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

    $stmt->close();
    $conn->close();

    exit;
}

/* =========================================
   ALL BLOGS
========================================= */

$query = "

SELECT
    id,
    slug,
    blog_title,
    author_name,
    publish_date,
    thumbnail,
    created_at

FROM blogs

ORDER BY id DESC

";

$result = $conn->query($query);

$blogs = [];

while ($row = $result->fetch_assoc()) {

    $blogs[] = $row;
}

echo json_encode([
    "success" => true,
    "total" => count($blogs),
    "blogs" => $blogs
]);

$conn->close();

?>