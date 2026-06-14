<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, DELETE");
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

/*

GET ALL

/Backend/home_calc.php

DELETE

/Backend/home_calc.php?id=2

*/

if ($_SERVER["REQUEST_METHOD"] === "DELETE") {

    parse_str(
        $_SERVER["QUERY_STRING"],
        $query
    );

    $id = intval($query["id"] ?? 0);

    if (!$id) {

        echo json_encode([
            "success" => false,
            "message" => "Invalid ID"
        ]);

        exit;
    }

    $stmt = $conn->prepare("
    
        DELETE FROM home_calc
        WHERE id = ?
    
    ");

    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {

        echo json_encode([
            "success" => true,
            "message" => "Deleted successfully"
        ]);

    } else {

        echo json_encode([
            "success" => false,
            "message" => "Delete failed"
        ]);
    }

    $stmt->close();
    $conn->close();

    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "GET") {

    echo json_encode([
        "success" => false,
        "message" => "Only GET and DELETE allowed"
    ]);

    exit;
}

$search = trim($_GET["search"] ?? "");

$sort = $_GET["sort"] ?? "latest";

$sql = "

SELECT * FROM home_calc

";

if (!empty($search)) {

    $search = $conn->real_escape_string($search);

    $sql .= "
    
        WHERE
        
        current_provider LIKE '%$search%'
        OR practice_type LIKE '%$search%'
        OR contact LIKE '%$search%'
    
    ";
}

if ($sort === "oldest") {

    $sql .= "
    
        ORDER BY id ASC
    
    ";

} else {

    $sql .= "
    
        ORDER BY id DESC
    
    ";
}

$result = $conn->query($sql);

$data = [];

while ($row = $result->fetch_assoc()) {

    $data[] = $row;
}

echo json_encode([
    "success" => true,
    "total" => count($data),
    "data" => $data
]);

$conn->close();

?>