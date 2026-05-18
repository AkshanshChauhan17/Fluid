<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, DELETE");
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
|--------------------------------------------------------------------------
| DELETE APPLICATION
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] === "DELETE") {

    $id = $_GET["id"] ?? "";

    if (empty($id)) {

        echo json_encode([
            "success" => false,
            "message" => "ID is required"
        ]);

        exit;
    }

    /*
    |--------------------------------------------------------------------------
    | GET FILE PATH FIRST
    |--------------------------------------------------------------------------
    */

    $stmt = $conn->prepare("
    
        SELECT uploaded_file
        FROM custom_savings_analysis
        WHERE id = ?
    
    ");

    $stmt->bind_param("i", $id);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {

        $row = $result->fetch_assoc();

        /*
        |--------------------------------------------------------------------------
        | DELETE FILE
        |--------------------------------------------------------------------------
        */

        if (
            !empty($row["uploaded_file"]) &&
            file_exists($row["uploaded_file"])
        ) {

            unlink($row["uploaded_file"]);
        }

        /*
        |--------------------------------------------------------------------------
        | DELETE ROW
        |--------------------------------------------------------------------------
        */

        $deleteStmt = $conn->prepare("
        
            DELETE FROM custom_savings_analysis
            WHERE id = ?
        
        ");

        $deleteStmt->bind_param("i", $id);

        if ($deleteStmt->execute()) {

            echo json_encode([
                "success" => true,
                "message" => "Application deleted successfully"
            ]);

        } else {

            echo json_encode([
                "success" => false,
                "message" => "Failed to delete application"
            ]);
        }

        $deleteStmt->close();

    } else {

        echo json_encode([
            "success" => false,
            "message" => "Application not found"
        ]);
    }

    $stmt->close();

    $conn->close();

    exit;
}

/*
|--------------------------------------------------------------------------
| GET APPLICATIONS
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    $search = trim(
        $_GET["search"] ?? ""
    );

    $sort = $_GET["sort"] ?? "latest";

    $orderBy =
        $sort === "oldest"
        ? "ASC"
        : "DESC";

    /*
    |--------------------------------------------------------------------------
    | SEARCH QUERY
    |--------------------------------------------------------------------------
    */

    if (!empty($search)) {

        $searchTerm = "%" . $search . "%";

        $stmt = $conn->prepare("
        
            SELECT *
            FROM custom_savings_analysis

            WHERE

                name LIKE ?
                OR practice_name LIKE ?
                OR email LIKE ?
                OR phone LIKE ?

            ORDER BY id $orderBy
        
        ");

        $stmt->bind_param(

            "ssss",

            $searchTerm,
            $searchTerm,
            $searchTerm,
            $searchTerm

        );

    } else {

        $stmt = $conn->prepare("
        
            SELECT *
            FROM custom_savings_analysis

            ORDER BY id $orderBy
        
        ");
    }

    $stmt->execute();

    $result = $stmt->get_result();

    $data = [];

    while ($row = $result->fetch_assoc()) {

        $data[] = $row;
    }

    echo json_encode([
        "success" => true,
        "data" => $data
    ]);

    $stmt->close();

    $conn->close();

    exit;
}

/*
|--------------------------------------------------------------------------
| INVALID METHOD
|--------------------------------------------------------------------------
*/

echo json_encode([
    "success" => false,
    "message" => "Invalid request method"
]);

$conn->close();

?>