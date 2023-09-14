<?php
// Enable CORS for all domains (not recommended for production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Allow specific HTTP methods (e.g., GET, POST, PUT)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
$data = array("data" => "Hello world");
$data = json_encode($data);
echo $data;
?>