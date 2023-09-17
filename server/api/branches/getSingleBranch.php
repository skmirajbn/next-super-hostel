<?php
require_once('./../../database/config.php');
require_once('./../../authetication/JWTAuthentication.php');
use Auth\Auth;

$_Headers = getallheaders();

function isTokenValid($token) {
    try {
        if (Auth::validateToken($token)) {
            return true;
        } else {
            return false;
        }
    } catch (Exception $e) {
        return false;
    }

}

if (isset($_Headers['Token'])) {
    $token = $_Headers['Token'];
    if (isTokenValid($token)) {
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $sql = "SELECT * FROM branches WHERE branch_id = $id";
            $result = $con->query($sql);
            $data = $result->fetch_assoc();
            $data = json_encode($data);
            echo $data;
        }
    } else {
        echo "Invalid Token";
    }
} else {
    echo "No Token";
}




?>