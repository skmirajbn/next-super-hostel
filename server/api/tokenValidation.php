<?php
require_once('./../authetication/JWTAuthentication.php');
use Auth\Auth;

// Enable CORS for all domains (not recommended for production)
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods (e.g., GET, POST, PUT)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

if (isset($_POST['token'])) {
    $token = $_POST['token'];
    try {
        if (Auth::validateToken($token)) {
            echo "valid";
        } else {
            echo "invalid";
        }
    } catch (Exception $e) {
        echo "invalid";
    }
    ;
}
?>