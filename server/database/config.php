<?php
// Enable CORS for all domains (not recommended for production)
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods (e.g., GET, POST, PUT)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");



$dbhost = "skmiraj.online";
$dbuser = "skmiraj";
$dbpass = "SWKbBT.LjXo-8Tj6";
$dbname = "skmiraj_react_superhostel";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
$con = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

?>