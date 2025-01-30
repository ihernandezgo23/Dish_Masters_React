<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Ruta del archivo JSON
$jsonFile = __DIR__ . './json/season_recipes.json';

// Leer datos existentes
$challenges = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir datos como JSON
    $inputData = json_decode(file_get_contents("php://input"), true);

    error_log(print_r($inputData, true)); // Debugging: Ver qué llega desde React

    if (!$inputData) {
        echo json_encode(["error" => "No data received"]);
        exit;
    }

    // Validar que el ID sea único
    foreach ($challenges as $challenge) {
        if ($challenge['id'] == $inputData['id']) {
            echo json_encode(["error" => "ID already exists"]);
            exit;
        }
    }

    // Agregar nuevo desafío con ID manual
    $newChallenge = [
        "id" => $inputData['id'] ?? '',
        "title" => $inputData['title'] ?? '',
        "description" => $inputData['description'] ?? '',
        "start" => $inputData['start'] ?? '',
        "deadline" => $inputData['deadline'] ?? '',
        "img" => $inputData['img'] ?? '',
        "status" => $inputData['status'] ?? 'ongoing',
        "color" => $inputData['color'] ?? 'success',
        "winner" => "soon"
    ];

    $challenges[] = $newChallenge;

    // Guardar en JSON
    if (file_put_contents($jsonFile, json_encode($challenges, JSON_PRETTY_PRINT)) === false) {
        error_log("Error writing to JSON file");
    }

    echo json_encode(["message" => "Challenge added successfully"]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Mostrar la información del archivo JSON
    if (empty($challenges)) {
        echo json_encode(["message" => "No challenges found"]);
    } else {
        echo json_encode($challenges);
    }
}

?>