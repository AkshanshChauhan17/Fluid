<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

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

TABLE EXPECTED FROM be.php

CREATE TABLE blogs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    blog_title TEXT NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    publish_date DATE NOT NULL,

    thumbnail VARCHAR(500),

    sections LONGTEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

*/

$id = $_GET["id"] ?? null;

/* =========================================
   SINGLE BLOG
========================================= */

if ($id) {

    $stmt = $conn->prepare("

        SELECT * FROM blogs
        WHERE id = ?

    ");

    $stmt->bind_param(
        "i",
        $id
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